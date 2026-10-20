# DESIGN.md: Waldhotel Doldenhorn

Leitidee: **Waldhaus mit Relais-&-Châteaux-Haltung.** Das Haus ist warm und herzlich wie bei Freunden («Zu Gast – bei Freunden»), dabei ruhig und präzise wie ein Gourmethaus. Die Bilder tragen die Seite, die Gestaltung tritt zurück.

## Farben (Tokens in `src/styles/global.css`)

| Token | Wert | Einsatz |
|---|---|---|
| `--wald-950` | #121a15 | Hero-Overlay, Footer |
| `--wald-900` | #1b2620 | Kopfzeile, dunkle Abschnitte (Kulinarik) |
| `--wald-700` | #2f4036 | Linien und Flächen auf Dunkel |
| `--moos` | #6b7558 | Sekundärakzent, Icons |
| `--papier` | #f6f2ea | Seitenhintergrund |
| `--stein` | #ebe4d6 | Karten, abgesetzte Abschnitte |
| `--holz` | #8a5a2b | Akzent: Buchen-Button, Links, Eyebrows (AA auf Papier) |
| `--holz-hell` | #d2a873 | Akzent auf Dunkel |
| `--tinte` | #1d2520 | Fliesstext |
| `--tinte-2` | #555d56 | Sekundärtext |

Kontraste: Tinte auf Papier ≥ 13:1, Holz auf Papier ≥ 5:1, Holz-hell auf Wald-900 ≥ 7:1.

## Typografie
- **Überschriften:** Fraunces Variable mit optischer Grösse, Gewicht 380–450, leicht negative Laufweite. Sie wirkt warm, handwerklich und edel.
- **Text und UI:** Instrument Sans Variable, 400 und 600.
- **Skala (fluid):** Display `clamp(2.6rem, 6vw, 5.4rem)`, H2 `clamp(2rem, 3.6vw, 3.2rem)`, H3 1.4rem, Text 1.0625rem mit Zeilenhöhe 1.65.
- **Eyebrow:** Instrument Sans 600, 0.78rem, Versalien mit +0.14em Laufweite, in Holz.
- Schriften liegen lokal (Fontsource) mit `font-display: swap`.

## Raster und Abstände
- Maximale Breite 1240px, Seitenrand `clamp(16px, 4vw, 48px)`.
- Abschnittsabstand `clamp(4.5rem, 10vw, 8.5rem)`.
- Abstandsskala: 0.5 / 1 / 1.5 / 2 / 3 / 4 / 6rem.
- Radius 2px, eckig wie Holz und Stein. Keine Schatten ausser beim Header-Zustand.

## Komponenten
- **Header:** Immer Wald-900 mit weissem Logo (das Logo existiert nur hell auf dunkel). Über dem Hero ist er transparent, nach dem Scrollen voll deckend. Rechts der Buchen-Button.
- **Buttons:** Primär Holz-Fläche mit Papier-Text. Sekundär Kontur. Auf Dunkel Holz-hell.
- **Karten (Zimmer):** Bild 4:3, darunter Name (Fraunces), Metazeile, Preis «ab CHF».
- **Listen mit Wert (Saunen):** Name links, Temperatur rechts mit tabellarischen Ziffern, feine Trennlinie.
- **Zitat:** Fraunces mit grossem Anführungszeichen in Holz-hell.

## Bewegung
- Hero-Video nur ohne `prefers-reduced-motion` und ab 768px Breite, mit sichtbarem Pause-Knopf.
- Sonst nur dezente Übergänge (Farbe, Opazität, 200ms). Keine Scroll-Animationen.

## Ton
- Sie-Form, herzlich und ruhig. Schweizer Hochdeutsch (ss).
- Originalformulierungen der Familie bleiben erhalten (Slogan, Gastgeberbrief).
