# doldenhorn-rebuild-2027

Neubau der Website des Waldhotels Doldenhorn in Kandersteg, heute unter doldenhorn-ruedihus.ch. Die neue Seite ist statisch und ohne WordPress. Ein Projekt von Bilegflow (Erdem Bileg, Elia).

## Umfang

1. **Phase 1:** Waldhotel Doldenhorn, heute unter `/doldenhorn/`
2. **Später:** Landgasthof Ruedihus und die gemeinsame Einstiegsseite

## Struktur

- `briefing/` enthält den privaten Projektplan. Der Ordner steht in `.gitignore` und wird nicht veröffentlicht.

## Entwicklung

```bash
npm install
npm run dev      # lokal unter http://localhost:4321/doldenhorn/
npm run build    # Vorschau-Build, noindex
LIVE=1 npm run build   # Live-Build, indexierbar (erst nach Freigabe)
```

- Inhalte: `src/data/waldhotel.de.json`. Später pflegt das CMS diese Datei.
- Gestaltung: `DESIGN.md` und `src/styles/global.css`
- Bilder: `src/assets/img/`. Astro erzeugt beim Build AVIF und WebP.
- Für eine Vorschau unter einem Unterpfad wird mit `BASE=/pfad/` gebaut.
