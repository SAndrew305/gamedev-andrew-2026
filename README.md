# gamedev-andrew-2026

A small collection of static HTML/CSS/JavaScript pages created for the Game Development course. The site is organised as a portfolio index plus one page per assignment or experiment.

## Folder structure

```text
.
├── index.html                 # Homepage / assignment index
├── baseline.css               # Shared base styling (used by several pages)
├── public/
│   ├── t1a01-table.html       # Term 1 assignment pages (numbered by topic)
│   ├── t1a02-list.html
│   ├── ...
│   ├── t1a11-arrays.html
│   ├── x1a01-gif-experiment.html
│   └── x1a10-mandelbrot-llm.html
└── README.md
```

## How to run / view

No build step is required.

1. Clone or download the repository.
2. Open `index.html` in any modern browser.
3. Click an assignment link to open it.

For local development, you can also serve the folder to avoid `file://` restrictions:

```bash
python -m http.server 8000
```

Then visit <http://localhost:8000>.

## Development

Optional tooling is provided for consistent formatting and HTML validation.

- Tool configuration lives in `config/`.
- Root-level files such as `.config`, `.gitignore`, and `package.json` remain at the repository root because tools and editors expect them there.
- Install dependencies with `npm install`.
- Format the repository with `npm run format`.
- Check formatting and HTML with `npm run check`.

## Notes

- `t1a...` pages are term 1 assignments, named by topic (`table`, `list`, `forms`, ...).
- `x1a...` pages are extra / experimental assignments.
- `baseline.css` is the shared stylesheet; some older pages still carry their own inline styles and may be migrated later.