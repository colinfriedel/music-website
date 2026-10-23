/**
 * All text on the page lives here. Colin writes the wording; anything set to
 * null shows a dashed "Placeholder" box until he provides it.
 */

export const site = {
  name: "Colin Friedel",
  title: "Colin Friedel | Music",
  url: "https://music.colinfriedel.com",
  portfolioUrl: "https://colinfriedel.com",

  // Search engines may index the page. Set to false to hide it from search.
  indexable: true,

  // Shown in link previews (texts, emails). Colin's words, from the portfolio's music blurb.
  description: "Playing guitar and singing since COVID. College bands, a cappella, and solo performances.",

  // Booking email. Not final until Colin confirms it.
  email: "colin@friedelsweb.com",
};

/** Images live in /public/images. Background photos are set in src/app/site.css (.bg). */
export const images = {
  backgroundAlt: "A band playing a backyard show at night for a packed crowd",
  nameFirst: { src: "/images/name-colin.png", alt: "Colin", width: 367, height: 180 },
  nameLast: { src: "/images/name-friedel.png", alt: "Friedel", width: 411, height: 180 },
  portrait: { src: "/images/portrait.jpg", alt: "Colin Friedel smiling with an electric guitar on a rooftop" },
  // Link preview image, 1200x630.
  og: { src: "/images/og.jpg", alt: "Colin Friedel playing electric guitar on a rooftop", width: 1200, height: 630 },
};

export const hero = {
  // One-line description under the name.
  line: null as string | null,
  contactLabel: "Contact Me",
};

/** Streaming and social links. Each one shows as a pill in the header. */
export const links: { label: string; href: string }[] = [
  { label: "YouTube", href: "https://www.youtube.com/@colinfriedel2254" },
];

export const nav = [
  { label: "Listen", href: "#listen" },
  { label: "Photos", href: "#photos" },
  { label: "Experience", href: "#experience" },
  { label: "What I play", href: "#play" },
  { label: "Contact", href: "#contact" },
];

export type Recording = { title: string; note: string | null; audio: string };
export type Video = { title: string; youtubeId: string };
// spotifyId is the code after /album/ in the Spotify link. note is an optional line under the player.
export type Album = { title: string; spotifyId: string; note: string | null };

export const listen = {
  heading: "Listen",
  recordings: [
    {
      title: "Shores of Galilee (Cover)",
      note: "Recorded at home with GarageBand. All instruments/vocals performed by me, and midi drum track written by me.",
      audio: "/audio/shores-of-galilee.m4a",
    },
  ] as Recording[],
  albums: [
    { title: "One Million Beers", spotifyId: "2nupmPuSrbydNxQJmH5KFx", note: null },
    { title: "Hummingbird Lane", spotifyId: "5aGOtnv67ZnWFA6B30WE4S", note: null },
  ] as Album[],
  videos: [] as Video[],
};

export type Photo = { src: string; alt: string; focus?: string };

export const photos = {
  heading: "Photos",
  items: [
    { src: "/images/stage/recital-hall.jpg", alt: "Playing acoustic guitar and singing on a concert hall stage", focus: "50% 72%" },
    { src: "/images/stage/band-night.jpg", alt: "Singing and playing electric guitar at an outdoor night show", focus: "50% 30%" },
    { src: "/images/stage/rooftop.jpg", alt: "Playing electric guitar sitting on a rooftop", focus: "68% 50%" },
    { src: "/images/stage/string-lights.jpg", alt: "Playing electric guitar under string lights at a night show", focus: "47% 40%" },
    { src: "/images/stage/campfire.jpg", alt: "Playing acoustic guitar by a campfire on the beach", focus: "90% 65%" },
    { src: "/images/stage/two-guitars.jpg", alt: "Close-up of two guitarists playing electric guitars on stage" },
    { src: "/images/stage/backyard-show.jpg", alt: "A band playing a backyard show at night for a packed crowd" },
  ] as Photo[],
};

export type Gig = { what: string; where: string | null; when: string | null; note: string | null };

export const experience = {
  heading: "Experience",
  // Short intro above the list. Colin's words, from the portfolio's music blurb.
  intro: "Playing guitar and singing since COVID. College bands, a cappella, and solo performances." as string | null,
  // Places, events, and groups, newest first.
  gigs: [] as Gig[],
};

export const play = {
  heading: "What I play",
  // Paragraph about the solo set: instruments, vocals, style.
  about: "I play acoustic guitar and sing." as string | null,
  genres: "Country, Folk, Rock, Indie (every decade of music from the 60s until now)" as string | null,
  influences: "Grateful Dead, Zach Bryan, Turnpike Troubadours, Beatles" as string | null,
  // For example "Mostly covers, some originals".
  coversOriginals: "At least for right now I'm just playing covers. I'm working on originals and would hope to play a couple of those at some point." as string | null,
  setLength: null as string | null,
  // Optional sample setlist: "Song - Artist" strings.
  setlist: [] as string[],
};

export const logistics = {
  // Set show to false to hide this section.
  show: true,
  heading: "Gear and setup",
  bring: "I can bring an amplifier for vocals and guitar, and a microphone and micstand (everything that I will need)." as string | null,
  need: null as string | null,
};

export const contact = {
  heading: "Contact",
  // Short line above the email, for example a note about rates.
  line: null as string | null,
};
