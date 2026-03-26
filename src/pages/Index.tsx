const Paw = ({ size = 80, rotate = 0, style = {} }: { size?: number; rotate?: number; style?: React.CSSProperties }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    width={size}
    height={size}
    style={{ transform: `rotate(${rotate}deg)`, ...style }}
    fill="#1a1a1a"
  >
    <ellipse cx="22" cy="18" rx="10" ry="12" />
    <ellipse cx="44" cy="10" rx="9" ry="11" />
    <ellipse cx="65" cy="13" rx="9" ry="11" />
    <ellipse cx="80" cy="28" rx="9" ry="11" />
    <path d="M50 40 C25 38 15 55 20 72 C25 88 40 95 50 95 C60 95 75 88 80 72 C85 55 75 38 50 40Z" />
  </svg>
);

export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo">ПЁСИЙ*ПАТРУЛЬ</div>
        <nav>
          <a href="#">Услуги</a>
          <a href="#">О нас</a>
          <a href="#">Отзывы</a>
          <a href="#">Контакты</a>
        </nav>
        <button className="btn-cta">Заказать выгул</button>
      </header>

      <main>
        <section className="hero" style={{ position: "relative" }}>
          {/* Лапки в углу hero-секции */}
          <div style={{ position: "absolute", top: 20, right: 20, zIndex: 10, display: "flex", flexDirection: "column", gap: 4, opacity: 0.85 }}>
            <Paw size={55} rotate={-20} />
            <Paw size={55} rotate={10} style={{ marginLeft: 40 }} />
            <Paw size={55} rotate={-15} style={{ marginLeft: 10 }} />
          </div>
          <div className="hero-content">
            <h1 className="hero-title">
              ТВОЙ ПЁС
              <br />
              ЗАСЛУЖИВАЕТ <span>ЛУЧШЕГО</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Профессиональный выгул собак во Владивостоке. Бережный уход, свежий морской воздух и море позитива — каждый день для твоего питомца.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Записаться
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Узнать цены
              </button>
            </div>
          </div>
          <div className="hero-img" style={{ backgroundImage: `url("https://cdn.poehali.dev/projects/ba6c3adb-5279-47e2-9dc6-23781698b8fa/files/45d85398-1806-4f1d-9530-18003ee37ce2.jpg")` }}>
            <div className="sticker">
              СЧАСТЛИВЫЙ
              <br />
              ПИТОМЕЦ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #ВЛАДИВОСТОК
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              ГАВ!
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * ПРОФЕССИОНАЛЬНЫЙ ВЫГУЛ * ЛЮБЯЩИЙ УХОД * ВЛАДИВОСТОК * ЕЖЕДНЕВНО * СВЕЖИЙ ВОЗДУХ * СЧАСТЛИВЫЕ ПСЫ *
            ПРОФЕССИОНАЛЬНЫЙ ВЫГУЛ * ЛЮБЯЩИЙ УХОД * ВЛАДИВОСТОК * ЕЖЕДНЕВНО * СВЕЖИЙ ВОЗДУХ * СЧАСТЛИВЫЕ ПСЫ
          </div>
        </div>

        <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
          {/* Лапки слева от заголовка услуг */}
          <div style={{ position: "absolute", left: -10, top: 30, opacity: 0.9, display: "flex", flexDirection: "column", gap: 6 }}>
            <Paw size={60} rotate={40} />
            <Paw size={60} rotate={20} style={{ marginLeft: 35 }} />
            <Paw size={60} rotate={40} />
          </div>
          <div className="section-header">
            <h2 className="section-title">НАШИ УСЛУГИ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Все тарифы
            </a>
          </div>

          <div className="menu-grid">
            <div className="menu-card">
              <span className="menu-tag">Хит</span>
              <img
                src="https://cdn.poehali.dev/projects/ba6c3adb-5279-47e2-9dc6-23781698b8fa/files/45d85398-1806-4f1d-9530-18003ee37ce2.jpg"
                alt="Стандартный выгул"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Стандартный</h3>
                  <span className="price">600 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Прогулка 60 минут в парке или набережной. Одна собака, фотоотчёт в мессенджер.
                </p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Популярное
              </span>
              <img
                src="https://cdn.poehali.dev/projects/ba6c3adb-5279-47e2-9dc6-23781698b8fa/files/30ff2eb0-43b7-4b69-95de-23448af3fd66.jpg"
                alt="Групповой выгул"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Групповой</h3>
                  <span className="price">400 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Прогулка с компанией таких же дружелюбных собак. 90 минут социализации и игр.</p>
              </div>
            </div>

            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Премиум
              </span>
              <img
                src="https://cdn.poehali.dev/projects/ba6c3adb-5279-47e2-9dc6-23781698b8fa/files/75fbc25f-b9dc-436d-a223-e71eed329f62.jpg"
                alt="VIP выгул"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>VIP Прогулка</h3>
                  <span className="price">1 200 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  2 часа, маршрут по выбору, видеоотчёт, лакомство в подарок. Чистка лап после прогулки.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">ТВОЙ ПЁС — НАШ ПРИОРИТЕТ.</h2>
            <p className="vibe-text">
              Мы не просто выгуливаем. Мы заботимся. Каждый выгульщик прошёл обучение и любит собак как своих. Фотоотчёты после каждой прогулки, GPS-трекинг маршрута и полная безопасность — гарантированно.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              О команде
            </button>
          </div>
          <div className="vibe-img" style={{ backgroundImage: `url("https://cdn.poehali.dev/projects/ba6c3adb-5279-47e2-9dc6-23781698b8fa/files/30ff2eb0-43b7-4b69-95de-23448af3fd66.jpg")`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
        </section>

        <section className="section-padding" style={{ position: "relative", overflow: "hidden" }}>
          {/* Лапки справа в фото-секции */}
          <div style={{ position: "absolute", right: -5, bottom: 20, opacity: 0.9, display: "flex", flexDirection: "column", gap: 6 }}>
            <Paw size={65} rotate={-30} style={{ marginLeft: 30 }} />
            <Paw size={65} rotate={-10} />
            <Paw size={65} rotate={-25} style={{ marginLeft: 40 }} />
          </div>
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @PESIY.PATROL
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ba6c3adb-5279-47e2-9dc6-23781698b8fa/files/45d85398-1806-4f1d-9530-18003ee37ce2.jpg"
                alt="Прогулка 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ba6c3adb-5279-47e2-9dc6-23781698b8fa/files/75fbc25f-b9dc-436d-a223-e71eed329f62.jpg"
                alt="Прогулка 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ba6c3adb-5279-47e2-9dc6-23781698b8fa/files/30ff2eb0-43b7-4b69-95de-23448af3fd66.jpg"
                alt="Прогулка 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://cdn.poehali.dev/projects/ba6c3adb-5279-47e2-9dc6-23781698b8fa/files/62a6dc87-40ee-4528-b0d2-93a8c6ef0cbd.jpg"
                alt="Прогулка 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">ПЁСИЙ*ПАТРУЛЬ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Профессиональный выгул собак во Владивостоке. Каждый пёс — наш лучший друг.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Услуги
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Политика
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Пн–Пт: 7:00 – 21:00</li>
            <li>Сб–Вс: 8:00 – 20:00</li>
            <li style={{ marginTop: "10px", fontWeight: 800 }}>📍 Владивосток</li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Контакты</h4>
          <ul>
            <li>
              <a href="tel:+79999999999" style={{ color: "inherit", textDecoration: "none" }}>
                +7 (999) 999-99-99
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Telegram
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}