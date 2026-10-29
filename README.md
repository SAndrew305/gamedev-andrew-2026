# gamedev-andrew-2026

A collection of static HTML, CSS, and JavaScript pages created for a Game Development (Computer Programming) course I'm taking. The site is organised as a portfolio index plus one page per assignment or experiment.

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

- `t1a...` pages: term 1 assignments, named by topic (`table`, `list`, `forms`, ...).
- `x1a...` pages: extra / experimental works created either with the intent to gain additional marks or simply because I wanted to make something.
- `baseline.css` -- shared stylesheet; some older pages may carry their own inline styles
- `script.js` = dark mode toggle on all webpages.
