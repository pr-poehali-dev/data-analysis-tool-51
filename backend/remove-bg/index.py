import os
import json
import boto3
import urllib.request
from io import BytesIO

def handler(event: dict, context) -> dict:
    """Удаляет белый фон с изображения и сохраняет PNG в S3"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    try:
        from PIL import Image
        import numpy as np
    except ImportError:
        return {'statusCode': 500, 'headers': {'Access-Control-Allow-Origin': '*'}, 'body': json.dumps({'error': 'PIL not available'})}

    body = json.loads(event.get('body', '{}'))
    image_url = body.get('url')

    with urllib.request.urlopen(image_url) as resp:
        img_data = resp.read()

    img = Image.open(BytesIO(img_data)).convert('RGBA')
    data = np.array(img)

    r, g, b, a = data[:,:,0], data[:,:,1], data[:,:,2], data[:,:,3]
    # Белый и светло-серый фон: все каналы > 220
    white_mask = (r > 220) & (g > 220) & (b > 220)
    data[white_mask, 3] = 0

    result_img = Image.fromarray(data)
    buf = BytesIO()
    result_img.save(buf, format='PNG')
    buf.seek(0)

    s3 = boto3.client(
        's3',
        endpoint_url='https://bucket.poehali.dev',
        aws_access_key_id=os.environ['AWS_ACCESS_KEY_ID'],
        aws_secret_access_key=os.environ['AWS_SECRET_ACCESS_KEY']
    )
    key = 'paw-transparent.png'
    s3.put_object(Bucket='files', Key=key, Body=buf.read(), ContentType='image/png')

    cdn_url = f"https://cdn.poehali.dev/projects/{os.environ['AWS_ACCESS_KEY_ID']}/files/{key}"

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'url': cdn_url})
    }
