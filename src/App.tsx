import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, NavLink, Navigate, Route, Routes, useLocation, useNavigate, useParams } from "react-router-dom";
import { siteConfig } from "./config";
import { frames, residenceIds, residenceImages } from "./gallery";
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
        <Link className="brand" to={`/${lang}`}>
          <span className="brand-mark">HY</span>
          <span>
            <strong>{text.hero.title}</strong>
            <small>{text.hero.place}</small>
          </span>
        </Link>
        <nav className={open ? "open" : ""}>
          {links.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav-tools">
          <div className="langs" role="group" aria-label={text.menu}>
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

function AgentCard({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <aside className="agent-card">
      <img src="/brand/mor-nechasim.png" alt={text.office} />
      <p>{text.visit.agentsLabel}</p>
      <ul>
        {text.visit.agents.map((agent) => (
          <li key={agent.name}>{agent.name}</li>
        ))}
      </ul>
      <Link to={`/${lang}/visit`}>{text.inquire}</Link>
    </aside>
  );
}

function PageHero({ image, kicker, title, alt }: { image: string; kicker: string; title: string; alt: string }) {
  return (
    <header className="page-intro">
      <img src={image} alt={alt} />
      <div>
        <p className="kicker">{kicker}</p>
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

function HomePage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  return (
    <Shell lang={lang} title={text.metaTitle}>
      <section className="banner">
        <img src="/media/sea-loungers.jpg" alt={text.gallery.captions[7]} />
      </section>
      <section className="project-head">
        <div>
          <p className="kicker">{text.hero.kicker}</p>
          <h1>{text.hero.title}</h1>
          <p className="place-line">{text.hero.place}</p>
          <p className="lead">{text.hero.lead}</p>
        </div>
        <AgentCard lang={lang} />
      </section>
      <ul className="stats">
        {text.facts.map((fact) => (
          <li key={fact}>{fact}</li>
        ))}
      </ul>
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
              <img src={residenceImages[index]} alt="" />
              <div>
                <h3>{home.name}</h3>
                <p>{home.kind}</p>
                <span>{text.ui.openHome}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
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
          <figcaption>{text.office}</figcaption>
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
          <AgentCard lang={lang} />
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

function GalleryPage({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const [frame, setFrame] = useState<number | null>(null);

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
      <section className="gallery">
        <div className="mosaic">
          {frames.map((item, index) => (
            <button key={item.src} type="button" className={`shot ${item.layout}`} onClick={() => setFrame(index)}>
              <img src={item.src} alt={text.gallery.captions[index]} />
              <span>{text.gallery.captions[index]}</span>
            </button>
          ))}
        </div>
      </section>
      <Continue lang={lang} to="location" label={text.nav.place} />
      {frame !== null ? (
        <dialog className="lightbox" open>
          <button className="lightbox-close" type="button" onClick={() => setFrame(null)}>
            {text.close}
          </button>
          <button
            className="lightbox-nav prev"
            type="button"
            onClick={() => setFrame((current) => (current === null ? current : (current + frames.length - 1) % frames.length))}
            aria-label={text.gallery.open}
          >
            ‹
          </button>
          <figure>
            <img src={frames[frame].src} alt={text.gallery.captions[frame]} />
            <figcaption>
              {text.gallery.captions[frame]}
              <span>
                {frame + 1} / {frames.length}
              </span>
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
