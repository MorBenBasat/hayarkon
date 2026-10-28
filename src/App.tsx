import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, NavLink, Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { siteConfig } from "./config";
import { frames, residenceIds, residenceImages, type GalleryCategory } from "./gallery";
import { copy, isLang, langMeta, langs, type Lang } from "./i18n";

function useChrome(lang: Lang, title: string) {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = langMeta[lang];
    document.documentElement.lang = meta.html;
    document.documentElement.dir = meta.dir;
    document.title = title;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", copy[lang].metaDescription);
    window.scrollTo(0, 0);
  }, [lang, title, pathname]);

  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname, lang]);
}

function Shell({ lang, title, children }: { lang: Lang; title: string; children: ReactNode }) {
  const text = copy[lang];
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  useChrome(lang, title);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  function go(code: Lang) {
    const rest = location.pathname.replace(/^\/(he|en|fr|ru)/, "");
    navigate(`/${code}${rest}`);
  }

  const links = [
    { to: `/${lang}/building`, label: text.nav.building },
    { to: `/${lang}/residences`, label: text.nav.residences },
    { to: `/${lang}/gallery`, label: text.nav.gallery },
    { to: `/${lang}/location`, label: text.nav.place },
    { to: `/${lang}/visit`, label: text.nav.visit },
  ];

  return (
    <>
      <a className="skip" href="#content">
        {text.nav.building}
      </a>
      <header className={`nav solid ${open ? "open" : ""}`}>
        <Link className="brand" to={`/${lang}`} aria-label={text.hero.title}>
          <div className="brand-crest-wrapper">
            <svg className="brand-crest" width="38" height="38" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="22" cy="22" r="20" stroke="url(#goldLogoGrad)" strokeWidth="1.2" strokeOpacity="0.4" />
              <circle cx="22" cy="22" r="16.5" stroke="url(#goldLogoGrad)" strokeWidth="1.2" />
              <path d="M12 25C15 23.5 18 25.5 22 24C26 22.5 29 24.5 32 23" stroke="url(#goldLogoGrad)" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M14 29C17 27.5 20 29.5 22 28.5C24 27.5 27 29.5 30 28" stroke="url(#goldLogoGrad)" strokeWidth="1" strokeLinecap="round" strokeOpacity="0.7" />
              <path d="M22 10V18" stroke="url(#goldLogoGrad)" strokeWidth="1.4" strokeLinecap="round" />
              <path d="M16 12L19.5 18.5" stroke="url(#goldLogoGrad)" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M28 12L24.5 18.5" stroke="url(#goldLogoGrad)" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="22" cy="19.5" r="2.5" fill="url(#goldLogoGrad)" />
              <defs>
                <linearGradient id="goldLogoGrad" x1="4" y1="4" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#e2be6c" />
                  <stop offset="0.5" stopColor="#a37c44" />
                  <stop offset="1" stopColor="#7a5520" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="brand-text">
            <strong className="brand-title">{text.hero.title}</strong>
            <span className="brand-sub">TEL AVIV · SEA FRONT</span>
          </div>
        </Link>
        <nav className={open ? "open" : ""}>
          {links.map((item) => (
            <NavLink key={item.to} to={item.to} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <div className="mobile-menu-footer">
            <Link className="mobile-menu-cta" to={`/${lang}/visit`} onClick={() => setOpen(false)}>
              {text.inquire}
            </Link>
            <a className="mobile-menu-phone" href="tel:+972543600082">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>054-360-0082</span>
            </a>
            <div className="langs mobile-langs">
              {langs.map((code) => (
                <button key={code} type="button" className={code === lang ? "on" : ""} onClick={() => { go(code); setOpen(false); }}>
                  {langMeta[code].label}
                </button>
              ))}
            </div>
          </div>
        </nav>
        <div className="nav-tools">
          <span className="currency-pill">₪ / $</span>
          <div className="langs desktop-langs" role="group" aria-label={text.menu}>
            {langs.map((code) => (
              <button key={code} type="button" className={code === lang ? "on" : ""} onClick={() => go(code)}>
                {langMeta[code].label}
              </button>
            ))}
          </div>
          <Link className="nav-cta" to={`/${lang}/visit`}>
            {text.inquire}
          </Link>
          <button
            className="burger"
            type="button"
            aria-expanded={open}
            aria-label={text.menu}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <main id="content">{children}</main>
      <footer>
        <div>
          <strong>{text.footer.rights}</strong>
          <p>{text.footer.discreet}</p>
          <div className="footer-links">
            {links.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-brand">
          <span>{text.footer.marketed}</span>
          <img src="/brand/mor-nechasim.png" alt={text.office} />
        </div>
        <div className="langs footer-langs">
          {langs.map((code) => (
            <button key={code} type="button" className={code === lang ? "on" : ""} onClick={() => go(code)}>
              {langMeta[code].label}
            </button>
          ))}
        </div>
      </footer>
    </>
  );
}


function PageHero({ image, kicker, title, alt }: { image: string; kicker: string; title: string; alt: string }) {
  return (
    <header className="stage short">
      <img src={image} alt={alt} />
      <div className="stage-shade" />
      <div className="stage-copy">
        <span className="page-hero-kicker">{kicker}</span>
        <h1>{title}</h1>
      </div>
    </header>
  );
}

function Continue({ lang, to, label }: { lang: Lang; to: string; label: string }) {
  return (
    <Link className="continue" to={`/${lang}/${to}`}>
      <span>{copy[lang].ui.continue}</span>
      <strong>{label}</strong>
    </Link>
  );
}

const tickerItems: Record<Lang, string[]> = {
  he: [
    "קו ראשון אמיתי לחוף הים",
    "פנטהאוז דופלקס יחיד במינו",
    "בריכת שחייה פרטית מול השקיעה",
    "תקרות בגובה 3.40 מטר",
    "שיווק בלעדי · מור נכסים",
    "מתקן חניה רובוטי עצמאי",
  ],
  en: [
    "First Line to the Mediterranean",
    "One-of-a-Kind Duplex Penthouse",
    "Private Sunset Swimming Pool",
    "3.40m High Ceilings",
    "Exclusive Marketing · More Properties",
    "Automated Parking System",
  ],
  fr: [
    "Première Ligne Face à la Méditerranée",
    "Penthouse Duplex d'Exception",
    "Piscine Privée Face au Coucher de Soleil",
    "Hauteur Sous Plafond 3.40m",
    "Commercialisation Exclusive · More Properties",
    "Système de Parking Robotisé",
  ],
  ru: [
    "Первая линия у Средиземного моря",
    "Уникальный двухуровневый пентхаус",
    "Частный бассейн с видом на закат",
    "Высота потоלков 3.40 м",
    "Эксклюзивный маркетинг · More Properties",
    "Автоматизированный паркинг",
  ],
};

function AgentContactCard({ lang }: { lang: Lang }) {
  const [salutation, setSalutation] = useState(lang === "he" ? "אדוני" : "Mr.");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [countryCode, setCountryCode] = useState(lang === "he" ? "+972" : "+1");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !phone) return;
    setSubmitted(true);
  };

  return (
    <div className="agent-rep-card">
      <div className="agent-rep-header">
        <div className="agent-rep-meta">
          <span className="rep-kicker">
            {lang === "he" ? "נכס זה מיוצג על ידי" : lang === "fr" ? "Cette propriété est représentée par" : lang === "ru" ? "Этот объект представляет" : "This property is represented by"}
          </span>
          <h3 className="rep-name">
            {lang === "he" ? "מור בן בסט" : "Mor Ben Basat"}
          </h3>
          <a className="rep-phone" href="tel:+972543600082" dir="ltr">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span>+972 54 360 0082</span>
          </a>
          <Link className="rep-link" to={`/${lang}/residences`}>
            {lang === "he" ? "ראה נכסים בפרויקט ←" : "View Residences ←"}
          </Link>
        </div>
        <div className="agent-avatar-wrap">
          <img src="/media/mor-ben-basat.jpg" alt="מור בן בסט" className="agent-avatar-img" />
        </div>
      </div>

      <h4 className="inquiry-headline">
        {lang === "he" ? "צור קשר לעוד מידע" : lang === "fr" ? "Contactez pour plus d'informations" : lang === "ru" ? "Свяжитесь для получения информации" : "Contact for more information"}
      </h4>

      {submitted ? (
        <div className="rep-success-box">
          <span className="success-icon">✓</span>
          <h5>{lang === "he" ? "פנייתך התקבלה בהצלחה" : "Inquiry Received Successfully"}</h5>
          <p>
            {lang === "he"
              ? "תודה רבה. מור בן בסט ייצור עמך קשר אישי ודיסקרטי בהקדם לתיאום פגישה וסיור פרטי בנכס."
              : "Thank you. Mor Ben Basat will be in touch directly for private viewing & advisory."}
          </p>
          <button type="button" className="rep-reset-btn" onClick={() => setSubmitted(false)}>
            {lang === "he" ? "שליחת פנייה נוספת" : "Send Another Message"}
          </button>
        </div>
      ) : (
        <form className="rep-form" onSubmit={handleSubmit}>
          <div className="rep-form-grid">
            <div className="rep-field rep-select-field">
              <select value={salutation} onChange={(e) => setSalutation(e.target.value)}>
                {lang === "he" ? (
                  <>
                    <option value="אדוני">אדוני</option>
                    <option value="גברתי">גברתי</option>
                    <option value="ד״ר">ד״ר</option>
                  </>
                ) : (
                  <>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                    <option value="Dr.">Dr.</option>
                  </>
                )}
              </select>
              <span className="rep-chevron">▼</span>
            </div>

            <div className="rep-field">
              <input
                type="text"
                required
                placeholder={lang === "he" ? "שם פרטי *" : "First Name *"}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="rep-field">
              <input
                type="text"
                placeholder={lang === "he" ? "שם משפחה" : "Last Name"}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="rep-field">
              <input
                type="email"
                placeholder={lang === "he" ? "אימייל" : "Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="rep-field rep-select-field">
              <select value={countryCode} onChange={(e) => setCountryCode(e.target.value)}>
                <option value="+972">ישראל (+972)</option>
                <option value="+1">USA / CAN (+1)</option>
                <option value="+44">UK (+44)</option>
                <option value="+33">France (+33)</option>
                <option value="+49">Germany (+49)</option>
                <option value="+7">Russia (+7)</option>
              </select>
              <span className="rep-chevron">▼</span>
            </div>

            <div className="rep-field">
              <input
                type="tel"
                required
                placeholder={lang === "he" ? "טלפון *" : "Phone *"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="rep-field rep-textarea-field">
              <textarea
                rows={4}
                placeholder={lang === "he" ? "הודעה..." : "Message..."}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="rep-submit-pill">
            <span>{lang === "he" ? "שליחת פנייה דיסקרטית" : "Send Confidential Inquiry"}</span>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </form>
      )}
    </div>
  );
}

function HomePage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <Shell lang={lang} title={text.metaTitle}>
      <section className="stage">
        <img src="/media/sea-loungers.jpg" alt={text.gallery.captions[7]} />
        <div className="stage-shade" />
        <div className="stage-copy">
          <span className="luxury-badge">{text.refCode || "REF: 440 · TLV"} · {text.hero.kicker}</span>
          <h1>{text.hero.title}</h1>
          <p className="place-line">{text.hero.place}</p>
          <p className="lead">{text.hero.lead}</p>
          <div className="hero-actions">
            <Link className="hero-btn-primary" to={`/${lang}/visit`}>
              <span>{text.inquire}</span>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
            <Link className="hero-btn-secondary" to={`/${lang}/gallery`}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              <span>{text.nav.gallery} · 12 {lang === "he" ? "תצלומים" : "Photos"}</span>
            </Link>
          </div>
          <div className="hero-features-chips">
            <span>✦ {lang === "he" ? "קו 1 לים" : "Seafront"}</span>
            <span>✦ {lang === "he" ? "בריכה פרטית" : "Private Pool"}</span>
            <span>✦ {lang === "he" ? "330 מ״ר" : "330 SQM"}</span>
            <span>✦ {lang === "he" ? "חניה רובוטית" : "Robotic Parking"}</span>
          </div>
        </div>
      </section>

      <div className="luxury-ticker" aria-hidden="true">
        <div className="ticker-track">
          {tickerItems[lang].concat(tickerItems[lang]).map((item, idx) => (
            <span key={idx} className="ticker-item">
              <span className="ticker-dot">✦</span>
              {item}
            </span>
          ))}
        </div>
      </div>

      {text.parameters ? (
        <section className="parameters-section">
          <div className="parameters-strip reveal">
            {text.parameters.map((p) => (
              <div key={p.title} className="param-box">
                <p className="param-title">{p.title}</p>
                <h3 className="param-val">{p.value}</h3>
                <p className="param-desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="overview-split-section reveal">
        <div className="overview-split-container">
          <div className="overview-highlights-col">
            <header className="overview-highlights-head">
              <span className="overview-kicker">
                {lang === "he" ? "סטנדרט של מצויינות · BOUTIQUE RESIDENCES" : "Standard of Excellence · Boutique Residences"}
              </span>
              <h2>{lang === "he" ? "איכות חיים ויוקרה בקו ראשון לים" : "Uncompromising Luxury on the Coast"}</h2>
              <p className="overview-sublead">
                {lang === "he"
                  ? "פרויקט מגורים פרטי, עצמאי ואקסקלוסיבי — 5 יחידות דיור בלבד בסטנדרט בינלאומי גבוה מול חוף גורדון והטיילת."
                  : "An exclusive private boutique building — only 5 luxury residences to international standards facing Gordon Beach."}
              </p>
            </header>

            {text.luxuryHighlights ? (
              <div className="overview-highlights-grid">
                {text.luxuryHighlights.map((item, idx) => (
                  <article key={item.title} className="overview-highlight-card">
                    <div className="card-top">
                      <span className="card-num">0{idx + 1}</span>
                      <h3>{item.title}</h3>
                    </div>
                    <p>{item.desc}</p>
                  </article>
                ))}
              </div>
            ) : null}

            <div className="overview-cta-strip">
              <Link className="overview-explore-link" to={`/${lang}/building`}>
                <span>{lang === "he" ? "למפרט האדריכלי והמלא של הפרויקט" : "Explore Full Architectural Specifications"}</span>
                <span className="arrow">←</span>
              </Link>
            </div>
          </div>

          <div className="overview-form-col">
            <AgentContactCard lang={lang} />
          </div>
        </div>
      </section>

      <section className="catalog">
        <header>
          <div>
            <p className="kicker">{text.homes.eyebrow}</p>
            <h2>{text.homes.title}</h2>
          </div>
          <Link to={`/${lang}/residences`}>{text.nav.residences}</Link>
        </header>
        <div className="home-grid">
          {text.residences.map((home, index) => (
            <Link key={residenceIds[index]} className="home-card" to={`/${lang}/residences/${residenceIds[index]}`}>
              <span className="home-card-badge">
                {index === 0
                  ? (lang === "he" ? "פנטהאוז דופלקס · בריכה פרטית" : "Duplex Penthouse · Private Pool")
                  : index === 1
                  ? (lang === "he" ? "קומה 5 מלאה · נוף פתוח לים" : "Full 5th Floor · Direct Sea View")
                  : (lang === "he" ? "דירת יוקרה · התאמה אישית" : "Luxury Residence · Bespoke Layout")}
              </span>
              <img src={residenceImages[index]} alt="" />
              <div>
                <h3>{home.name}</h3>
                <p>{home.kind}</p>
                <span>{text.ui.openHome} ←</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <div className="mobile-floating-bar">
        <a className="floating-call-btn" href="tel:+972543600082" aria-label="Call 054-360-0082">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
          <span>054-360-0082</span>
        </a>
        <Link className="floating-inquire-btn" to={`/${lang}/visit`}>
          <span>{text.inquire}</span>
        </Link>
      </div>
    </Shell>
  );
}

function BuildingPage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <Shell lang={lang} title={`${text.nav.building} · ${text.hero.title}`}>
      <PageHero image="/media/living-sea-tv.jpg" kicker={text.story.eyebrow} title={text.story.title} alt={text.gallery.captions[9]} />
      <section className="story single">
        <div className="story-copy reveal">
          {text.story.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <p className="aside">{text.story.aside}</p>
        </div>
        <figure className="story-photo reveal">
          <img src="/media/lobby.jpg" alt={text.gallery.captions[3]} />
          <figcaption>{text.gallery.captions[3]}</figcaption>
        </figure>
      </section>
      <section className="offer">
        <div className="reveal">
          <p className="eyebrow light">{text.offer.eyebrow}</p>
          <h2>{text.offer.title}</h2>
          <p>{text.offer.body}</p>
          <p className="price">{text.offer.price}</p>
        </div>
        <div className="audience-list">
          <h3 className="reveal">{text.audiencesTitle}</h3>
          <ol>
            {text.audiences.map((item, index) => (
              <li key={item.title} className="reveal">
                <span>0{index + 1}</span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="standard">
        <div className="reveal">
          <p className="eyebrow">{text.standard.eyebrow}</p>
          <h2>{text.standard.title}</h2>
        </div>
        <ul>
          {text.standard.items.map((item, index) => (
            <li key={item} className="reveal">
              <span>{String(index + 1).padStart(2, "0")}</span>
              {item}
            </li>
          ))}
        </ul>
      </section>
      <Continue lang={lang} to="residences" label={text.nav.residences} />
    </Shell>
  );
}

function ResidencesPage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <Shell lang={lang} title={`${text.nav.residences} · ${text.hero.title}`}>
      <PageHero image="/media/terrace-sea.jpg" kicker={text.homes.eyebrow} title={text.homes.title} alt={text.gallery.captions[2]} />
      <section className="homes">
        <header className="section-head reveal">
          <p>{text.homes.intro}</p>
        </header>
        <div className="home-grid">
          {text.residences.map((home, index) => (
            <Link key={residenceIds[index]} className="home-card" to={`/${lang}/residences/${residenceIds[index]}`}>
              <img src={residenceImages[index]} alt="" />
              <div>
                <h3>{home.name}</h3>
                <p>{home.kind}</p>
                <span>{text.ui.openHome}</span>
              </div>
            </Link>
          ))}
        </div>
        <p className="plans-note reveal">
          {text.homes.plansNote} <Link to={`/${lang}/visit`}>{text.homes.request}</Link>
        </p>
      </section>
      <Continue lang={lang} to="gallery" label={text.nav.gallery} />
    </Shell>
  );
}

function ResidencePage({ lang }: { lang: Lang }) {
  const { home } = useParams();
  const text = copy[lang];
  const index = residenceIds.indexOf(home as (typeof residenceIds)[number]);
  if (index < 0) return <Navigate to={`/${lang}/residences`} replace />;
  const residence = text.residences[index];
  const previous = index === 0 ? residenceIds.length - 1 : index - 1;
  const next = (index + 1) % residenceIds.length;
  return (
    <Shell lang={lang} title={`${residence.name} · ${text.hero.title}`}>
      <PageHero image={residenceImages[index]} kicker={residence.kind} title={residence.name} alt={residence.name} />
      <section className="detail">
        <div className="reveal">
          <p className="kind">{residence.kind}</p>
          <p>{residence.text}</p>
          <p className="plans-note">
            {text.homes.plansNote} <Link to={`/${lang}/visit`}>{text.homes.request}</Link>
          </p>
          <div className="residence-vip-inquiry">
            <div className="inquiry-text">
              <h4>{lang === "he" ? "מעוניינים בתיאום ביקור פרטי?" : "Interested in a Private Viewing?"}</h4>
              <p>{lang === "he" ? "חוברת הפרויקט, תוכניות אדריכליות ומחיר נמסרים בפנייה ישירה ודיסקרטית." : "Full plans, technical specifications, and pricing are shared in discreet private consultation."}</p>
            </div>
            <div className="inquiry-btns">
              <Link className="btn-inquire" to={`/${lang}/visit`}>
                {text.inquire}
              </Link>
              <a className="btn-call" href="tel:+972543600082">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>054-360-0082</span>
              </a>
            </div>
          </div>
        </div>
        <figure className="reveal">
          <img src={frames[(index + 3) % frames.length].src} alt={text.gallery.captions[(index + 3) % frames.length]} />
        </figure>
      </section>
      <nav className="residence-pager">
        <Link to={`/${lang}/residences/${residenceIds[previous]}`}>
          <span>0{previous + 1}</span>
          {text.residences[previous].name}
        </Link>
        <Link to={`/${lang}/residences`}>{text.ui.allHomes}</Link>
        <Link to={`/${lang}/residences/${residenceIds[next]}`}>
          <span>0{next + 1}</span>
          {text.residences[next].name}
        </Link>
      </nav>
    </Shell>
  );
}

const galleryCategoryLabels: Record<Lang, Record<GalleryCategory, string>> = {
  he: {
    all: "כל התמונות",
    outdoor: "מרפסות, דק ובריכה",
    living: "חללי אירוח וסלון",
    interior: "אדריכלות, לובי ומטבח",
  },
  en: {
    all: "All Photographs",
    outdoor: "Terraces, Deck & Pool",
    living: "Living & Salons",
    interior: "Architecture & Lobby",
  },
  fr: {
    all: "Toutes les photos",
    outdoor: "Terrasses, Deck & Piscine",
    living: "Séjours & Salons",
    interior: "Architecture & Hall",
  },
  ru: {
    all: "Все фотографии",
    outdoor: "Террасы, дек и бассейн",
    living: "Гостиные и залы",
    interior: "Архитектура и лобби",
  },
};

function GalleryPage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const [frame, setFrame] = useState<number | null>(null);
  const [category, setCategory] = useState<GalleryCategory>("all");
  const [layoutMode, setLayoutMode] = useState<"mosaic" | "grid">("mosaic");

  const categories: { id: GalleryCategory; label: string }[] = [
    { id: "all", label: galleryCategoryLabels[lang].all },
    { id: "outdoor", label: galleryCategoryLabels[lang].outdoor },
    { id: "living", label: galleryCategoryLabels[lang].living },
    { id: "interior", label: galleryCategoryLabels[lang].interior },
  ];

  const filteredItems = frames
    .map((item, index) => ({ item, index }))
    .filter(({ item }) => category === "all" || item.category === category);

  useEffect(() => {
    if (frame === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setFrame(null);
      if (event.key === "ArrowLeft") {
        setFrame((current) => (current === null ? current : (current + frames.length - 1) % frames.length));
      }
      if (event.key === "ArrowRight") {
        setFrame((current) => (current === null ? current : (current + 1) % frames.length));
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [frame]);

  return (
    <Shell lang={lang} title={`${text.nav.gallery} · ${text.hero.title}`}>
      <PageHero image="/media/pool-sky.jpg" kicker={text.gallery.eyebrow} title={text.gallery.title} alt={text.gallery.captions[10]} />
      
      <section className="gallery-page">
        <div className="gallery-toolbar reveal">
          <div className="gallery-filters" role="tablist">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`filter-btn ${category === cat.id ? "active" : ""}`}
                onClick={() => setCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="count-pill">
                  {cat.id === "all" ? frames.length : frames.filter((f) => f.category === cat.id).length}
                </span>
              </button>
            ))}
          </div>

          <div className="gallery-view-options">
            <span className="gallery-count-badge">
              {lang === "he" ? `${filteredItems.length} תצלומים מתוך הנכס` : `${filteredItems.length} Exclusive Photographs`}
            </span>
            <div className="gallery-layout-toggle" role="group">
              <button
                type="button"
                className={layoutMode === "mosaic" ? "on" : ""}
                onClick={() => setLayoutMode("mosaic")}
                title={lang === "he" ? "פסיפס אדריכלי" : "Mosaic layout"}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="18" rx="1" />
                  <rect x="14" y="3" width="7" height="8" rx="1" />
                  <rect x="14" y="13" width="7" height="8" rx="1" />
                </svg>
                <span>{lang === "he" ? "פסיפס" : "Mosaic"}</span>
              </button>
              <button
                type="button"
                className={layoutMode === "grid" ? "on" : ""}
                onClick={() => setLayoutMode("grid")}
                title={lang === "he" ? "גריד אחיד" : "Uniform grid"}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="8" rx="1" />
                  <rect x="14" y="3" width="7" height="8" rx="1" />
                  <rect x="3" y="13" width="7" height="8" rx="1" />
                  <rect x="14" y="13" width="7" height="8" rx="1" />
                </svg>
                <span>{lang === "he" ? "גריד" : "Grid"}</span>
              </button>
            </div>
          </div>
        </div>

        <div className={`gallery-container ${layoutMode}`}>
          {filteredItems.map(({ item, index }) => (
            <button
              key={item.src}
              type="button"
              className={`gallery-card ${layoutMode === "mosaic" ? item.layout : "uniform"} reveal`}
              onClick={() => setFrame(index)}
            >
              <img src={item.src} alt={text.gallery.captions[index]} loading="lazy" />
              <div className="card-overlay">
                <div className="overlay-top">
                  <span className="expand-badge">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 3 21 3 21 9" />
                      <polyline points="9 21 3 21 3 15" />
                      <line x1="21" y1="3" x2="14" y2="10" />
                      <line x1="3" y1="21" x2="10" y2="14" />
                    </svg>
                    <span>{text.gallery.open}</span>
                  </span>
                </div>
                <div className="overlay-bottom">
                  <span className="photo-num">0{index + 1}</span>
                  <p className="photo-caption">{text.gallery.captions[index]}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      <Continue lang={lang} to="location" label={text.nav.place} />

      {frame !== null ? (
        <dialog className="lightbox" open>
          <div className="lightbox-header">
            <div className="lightbox-info">
              <strong>{String(frame + 1).padStart(2, "0")} / {String(frames.length).padStart(2, "0")}</strong>
              <span>· {text.hero.title} · TLV</span>
            </div>
            <div className="lightbox-actions">
              <Link className="lightbox-cta" to={`/${lang}/visit`} onClick={() => setFrame(null)}>
                {text.inquire}
              </Link>
              <button
                className="lightbox-close"
                type="button"
                onClick={() => setFrame(null)}
                aria-label={text.close}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="lightbox-body">
            <button
              className="lightbox-nav prev"
              type="button"
              onClick={() => setFrame((current) => (current === null ? current : (current + frames.length - 1) % frames.length))}
              aria-label={text.gallery.open}
            >
              ‹
            </button>
            <figure className="lightbox-figure">
              <img src={frames[frame].src} alt={text.gallery.captions[frame]} />
              <figcaption>
                <h4>{text.gallery.captions[frame]}</h4>
              </figcaption>
            </figure>
            <button
              className="lightbox-nav next"
              type="button"
              onClick={() => setFrame((current) => (current === null ? current : (current + 1) % frames.length))}
              aria-label={text.gallery.open}
            >
              ›
            </button>
          </div>

          <div className="lightbox-thumbnails-bar">
            {frames.map((item, idx) => (
              <button
                key={item.src}
                type="button"
                className={`thumb-btn ${idx === frame ? "active" : ""}`}
                onClick={() => setFrame(idx)}
              >
                <img src={item.src} alt="" />
              </button>
            ))}
          </div>
        </dialog>
      ) : null}
    </Shell>
  );
}

function LocationPage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <Shell lang={lang} title={`${text.nav.place} · ${text.hero.title}`}>
      <PageHero image="/media/sea-loungers.jpg" kicker={text.place.eyebrow} title={text.place.title} alt={text.gallery.captions[7]} />
      <section className="place single">
        <div className="place-copy reveal">
          <p className="intro">{text.place.intro}</p>
          <div className="points">
            {text.place.points.map((point) => (
              <article key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </article>
            ))}
          </div>
        </div>
        <figure className="place-photo reveal">
          <img src="/media/terrace-evening.jpg" alt={text.gallery.captions[5]} />
        </figure>
      </section>
      <Continue lang={lang} to="visit" label={text.nav.visit} />
    </Shell>
  );
}

function VisitPage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [interest, setInterest] = useState(text.visit.form.interests[0]);

  useEffect(() => {
    setInterest(text.visit.form.interests[0]);
    setSent(false);
    setError("");
  }, [lang, text.visit.form.interests]);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const topic = String(data.get("interest") ?? interest);
    if (!name || !phone) {
      setError(text.visit.form.required);
      return;
    }
    setError("");
    const body = `${text.hero.title} / ${text.hero.place}\n${name}\n${phone}\n${email}\n${topic}\n${message}`;
    if (siteConfig.email) {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(text.hero.title)}&body=${encodeURIComponent(body)}`;
    } else if (siteConfig.whatsapp) {
      window.open(`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(body)}`, "_blank", "noopener,noreferrer");
    }
    setSent(true);
  }

  return (
    <Shell lang={lang} title={`${text.nav.visit} · ${text.hero.title}`}>
      <PageHero image="/media/lobby-detail.jpg" kicker={text.visit.eyebrow} title={text.visit.title} alt={text.gallery.captions[3]} />
      <section className="visit flat">
        <div className="visit-copy reveal">
          <p>{text.visit.body}</p>
          <p className="agents-label">{text.visit.agentsLabel}</p>
          <ul className="agents">
            {text.visit.agents.map((agent) => (
              <li key={agent.name}>
                <strong>{agent.name}</strong>
                <span>{agent.role}</span>
              </li>
            ))}
          </ul>
          <img className="office-logo" src="/brand/mor-nechasim.png" alt={text.office} />
        </div>
        <div className="visit-form reveal">
          {sent ? (
            <div className="success">
              <p className="eyebrow">{text.office}</p>
              <h3>{text.visit.form.successTitle}</h3>
              <p>{text.visit.form.successBody}</p>
              <button type="button" onClick={() => setSent(false)}>
                {text.visit.form.again}
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit}>
              <label>
                {text.visit.form.name}
                <input name="name" autoComplete="name" />
              </label>
              <label>
                {text.visit.form.phone}
                <input name="phone" autoComplete="tel" inputMode="tel" />
              </label>
              <label className="full">
                {text.visit.form.email}
                <input name="email" type="email" autoComplete="email" />
              </label>
              <label className="full">
                {text.visit.form.interest}
                <select name="interest" value={interest} onChange={(event) => setInterest(event.target.value)}>
                  {text.visit.form.interests.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </label>
              <label className="full">
                {text.visit.form.message}
                <textarea name="message" rows={4} />
              </label>
              {error ? <p className="form-error full">{error}</p> : null}
              <button className="full" type="submit">
                {text.visit.form.submit}
              </button>
            </form>
          )}
        </div>
      </section>
    </Shell>
  );
}

function LanguageRoutes() {
  const { lang } = useParams();
  if (!isLang(lang)) return <Navigate to="/he" replace />;
  return (
    <Routes>
      <Route index element={<HomePage lang={lang} />} />
      <Route path="building" element={<BuildingPage lang={lang} />} />
      <Route path="residences" element={<ResidencesPage lang={lang} />} />
      <Route path="residences/:home" element={<ResidencePage lang={lang} />} />
      <Route path="gallery" element={<GalleryPage lang={lang} />} />
      <Route path="location" element={<LocationPage lang={lang} />} />
      <Route path="visit" element={<VisitPage lang={lang} />} />
      <Route path="*" element={<Navigate to={`/${lang}`} replace />} />
    </Routes>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/he" replace />} />
      <Route path="/:lang/*" element={<LanguageRoutes />} />
    </Routes>
  );
}
