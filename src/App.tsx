import { useEffect, useState, type FormEvent } from "react";
import { Navigate, Route, Routes, useNavigate, useParams } from "react-router-dom";
import { siteConfig } from "./config";
import { frames, residenceImages } from "./gallery";
import { copy, isLang, langMeta, langs, type Lang } from "./i18n";

function usePageChrome(lang: Lang) {
  useEffect(() => {
    const meta = langMeta[lang];
    const text = copy[lang];
    document.documentElement.lang = meta.html;
    document.documentElement.dir = meta.dir;
    document.title = text.metaTitle;
    const description = document.querySelector('meta[name="description"]');
    description?.setAttribute("content", text.metaDescription);
  }, [lang]);

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
  }, [lang]);
}

function Page() {
  const { lang: raw } = useParams();
  if (!isLang(raw)) return <Navigate to="/he" replace />;
  return <Site lang={raw} />;
}

function Site({ lang }: { lang: Lang }) {
  const text = copy[lang];
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [frame, setFrame] = useState<number | null>(null);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [interest, setInterest] = useState(text.visit.form.interests[0]);

  usePageChrome(lang);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setInterest(text.visit.form.interests[0]);
    setSent(false);
    setError("");
    setOpen(false);
  }, [lang, text.visit.form.interests]);

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

  function go(code: Lang) {
    const hash = window.location.hash;
    navigate(`/${code}${hash}`);
  }

  function closeMenu() {
    setOpen(false);
  }

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
    <>
      <a className="skip" href="#building">
        {text.nav.building}
      </a>
      <header className={`nav ${solid || open ? "solid" : ""}`}>
        <a className="brand" href="#top" onClick={closeMenu}>
          <span className="brand-mark">HY</span>
          <span>
            <strong>{text.hero.title}</strong>
            <small>{text.hero.place}</small>
          </span>
        </a>
        <nav className={open ? "open" : ""}>
          <a href="#building" onClick={closeMenu}>{text.nav.building}</a>
          <a href="#residences" onClick={closeMenu}>{text.nav.residences}</a>
          <a href="#gallery" onClick={closeMenu}>{text.nav.gallery}</a>
          <a href="#place" onClick={closeMenu}>{text.nav.place}</a>
          <a href="#visit" onClick={closeMenu}>{text.nav.visit}</a>
        </nav>
        <div className="nav-tools">
          <div className="langs" role="group" aria-label={text.menu}>
            {langs.map((code) => (
              <button key={code} type="button" className={code === lang ? "on" : ""} onClick={() => go(code)}>
                {langMeta[code].label}
              </button>
            ))}
          </div>
          <a className="nav-cta" href="#visit">
            {text.inquire}
          </a>
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

      <main id="top">
        <section className="hero">
          <img src="/media/sea-loungers.jpg" alt={text.gallery.captions[7]} />
          <div className="hero-shade" />
          <div className="hero-copy">
            <p className="kicker">{text.hero.kicker}</p>
            <h1>
              {text.hero.title}
              <em>{text.hero.place}</em>
            </h1>
            <p className="lead">{text.hero.lead}</p>
          </div>
          <ul className="fact-row">
            {text.facts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </section>

        <section id="building" className="story">
          <div className="story-copy reveal">
            <p className="index">{text.story.index}</p>
            <p className="eyebrow">{text.story.eyebrow}</p>
            <h2>{text.story.title}</h2>
            {text.story.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <p className="aside">{text.story.aside}</p>
          </div>
          <figure className="story-photo reveal">
            <img src="/media/living-sea-tv.jpg" alt={text.gallery.captions[9]} />
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

        <section id="residences" className="homes">
          <header className="section-head reveal">
            <p className="index">{text.homes.eyebrow}</p>
            <h2>{text.homes.title}</h2>
            <p>{text.homes.intro}</p>
          </header>
          <div className="residence-list">
            {text.residences.map((home, index) => (
              <article key={home.name} className="residence reveal">
                <img src={residenceImages[index]} alt="" />
                <div>
                  <span className="num">0{index + 1}</span>
                  <h3>{home.name}</h3>
                  <p className="kind">{home.kind}</p>
                  <p>{home.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="plans-note reveal">
            {text.homes.plansNote} <a href="#visit">{text.homes.request}</a>
          </p>
        </section>

        <section id="gallery" className="gallery">
          <header className="section-head reveal">
            <p className="index">{text.gallery.eyebrow}</p>
            <h2>{text.gallery.title}</h2>
          </header>
          <div className="mosaic">
            {frames.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={`shot ${item.layout}`}
                onClick={() => setFrame(index)}
              >
                <img src={item.src} alt={text.gallery.captions[index]} />
                <span>{text.gallery.captions[index]}</span>
              </button>
            ))}
          </div>
        </section>

        <section id="place" className="place">
          <div className="place-copy reveal">
            <p className="index">{text.place.eyebrow}</p>
            <h2>{text.place.title}</h2>
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

        <section id="visit" className="visit">
          <div className="visit-copy reveal">
            <p className="index">{text.visit.eyebrow}</p>
            <h2>{text.visit.title}</h2>
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
      </main>

      <footer>
        <div>
          <strong>{text.footer.rights}</strong>
          <p>{text.footer.discreet}</p>
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
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/he" replace />} />
      <Route path="/:lang" element={<Page />} />
    </Routes>
  );
}
