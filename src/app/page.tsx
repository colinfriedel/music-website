import { PhotoGrid } from "@/components/PhotoGrid";
import { Placeholder } from "@/components/Placeholder";
import { contact, experience, hero, images, links, listen, logistics, nav, photos, play, site } from "@/content/music";

export default function Home() {
  const { nameFirst, nameLast, portrait } = images;
  const mailto = `mailto:${site.email}`;
  const facts = [
    { label: "Genres", value: play.genres, ph: "genres and influences" },
    { label: "Influences", value: play.influences, ph: "influences" },
    { label: "Covers or originals", value: play.coversOriginals, ph: "covers, originals, or a mix" },
    { label: "Set length", value: play.setLength, ph: "typical set length" },
  ];

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <div className="wrap">
        <header className="panel hero">
          <div className="id">
            <h1 className="name" aria-label={site.name} style={{ margin: 0 }}>
              <img src={nameFirst.src} width={nameFirst.width} height={nameFirst.height} alt={nameFirst.alt} />
              <img src={nameLast.src} width={nameLast.width} height={nameLast.height} alt={nameLast.alt} />
            </h1>
            {hero.line ? <p className="lead">{hero.line}</p> : <Placeholder>one-line description of you as a musician</Placeholder>}
            <div className="actions">
              <a className="cta" href={mailto}>{hero.contactLabel}</a>
              {links.map((l) => (
                <a key={l.href} className="pill" href={l.href} target="_blank" rel="noopener">{l.label}</a>
              ))}
            </div>
            <nav aria-label="Sections">
              {nav.map((n) => <a key={n.href} href={n.href}>{n.label}</a>)}
            </nav>
          </div>
          <img className="portrait" src={portrait.src} alt={portrait.alt} />
        </header>

        <main id="main" className="stack">
          <section id="listen" className="panel sec" aria-labelledby="listen-h">
            <h2 id="listen-h">{listen.heading}</h2>
            <div className="tracks">
              {listen.recordings.map((r) => (
                <div key={r.audio} className="track">
                  <h3>{r.title}</h3>
                  {r.note && <p className="muted">{r.note}</p>}
                  <audio controls preload="metadata" src={r.audio}>
                    <a href={r.audio}>Download {r.title}</a>
                  </audio>
                </div>
              ))}
            </div>
            {listen.albums.length > 0 && (
              <div className="albums">
                {listen.albums.map((al) => (
                  <div key={al.spotifyId} className="album">
                    <h3>{al.title}</h3>
                    {al.note && <p className="muted">{al.note}</p>}
                    <iframe
                      src={`https://open.spotify.com/embed/album/${encodeURIComponent(al.spotifyId)}`}
                      title={`${al.title} on Spotify`}
                      loading="lazy"
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    />
                  </div>
                ))}
              </div>
            )}
            {listen.videos.length > 0 && (
              <div className="videos">
                {listen.videos.map((v) => (
                  <div key={v.youtubeId} className="video">
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.youtubeId)}`}
                      title={v.title}
                      loading="lazy"
                      allow="encrypted-media; picture-in-picture"
                      allowFullScreen
                    />
                    <p>{v.title}</p>
                  </div>
                ))}
              </div>
            )}
          </section>

          <section id="photos" className="panel sec" aria-labelledby="photos-h">
            <h2 id="photos-h">{photos.heading}</h2>
            <PhotoGrid items={photos.items} />
          </section>

          <section id="experience" className="panel sec" aria-labelledby="experience-h">
            <h2 id="experience-h">{experience.heading}</h2>
            {experience.intro && <p className="intro">{experience.intro}</p>}
            {experience.gigs.length > 0 ? (
              <ul className="gigs">
                {experience.gigs.map((g, i) => (
                  <li key={i} className="gig">
                    <h3>{g.what}</h3>
                    {g.when && <span className="when">{g.when}</span>}
                    {g.where && <p className="where">{g.where}</p>}
                    {g.note && <p className="note">{g.note}</p>}
                  </li>
                ))}
              </ul>
            ) : (
              <Placeholder>venues, events, and groups you have played with, and roughly when</Placeholder>
            )}
          </section>

          <section id="play" className="panel sec" aria-labelledby="play-h">
            <h2 id="play-h">{play.heading}</h2>
            {play.about ? <p className="intro">{play.about}</p> : <Placeholder>what your solo set is like: instruments, vocals, style</Placeholder>}
            <dl className="facts">
              {facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value ?? <span className="muted"><i>Placeholder: {f.ph}</i></span>}</dd>
                </div>
              ))}
            </dl>
            {play.setlist.length > 0 && (
              <>
                <h3 style={{ marginTop: 18 }}>Sample setlist</h3>
                <ol className="setlist">
                  {play.setlist.map((s) => <li key={s}>{s}</li>)}
                </ol>
              </>
            )}
          </section>

          {logistics.show && (
            <section id="gear" className="panel sec" aria-labelledby="gear-h">
              <h2 id="gear-h">{logistics.heading}</h2>
              <div className="two">
                <div>
                  <h3>What I bring</h3>
                  {logistics.bring ? <p>{logistics.bring}</p> : <Placeholder>gear you bring (guitar, amp, PA, mics)</Placeholder>}
                </div>
                <div>
                  <h3>What I need from the venue</h3>
                  {logistics.need ? <p>{logistics.need}</p> : <Placeholder>what you need (power, space, sound system)</Placeholder>}
                </div>
              </div>
            </section>
          )}

          <section id="contact" className="panel sec contact" aria-labelledby="contact-h">
            <h2 id="contact-h">{contact.heading}</h2>
            {contact.line ? <p className="intro">{contact.line}</p> : <Placeholder>a short line about booking, for example rates</Placeholder>}
            <a className="email" href={mailto}>{site.email}</a>
            <a className="cta" href={mailto}>{hero.contactLabel}</a>
          </section>
        </main>

        <footer>
          <a href={site.portfolioUrl}>colinfriedel.com</a>
        </footer>
      </div>
    </>
  );
}
