/* Universal dark-mode toggle for gamedev-andrew-2026.
   Included on every page. Toggles `data-theme` on <html>, persists the choice
   in localStorage, and respects the system preference by default. */
(function () {
    let STORAGE_KEY = "gamedev-theme";
    let html = document.documentElement;
    let body = document.body;
    let toggle = null;

    function setTheme(theme) {
        if (theme === "dark") {
            html.setAttribute("data-theme", "dark");
        } else {
            html.removeAttribute("data-theme");
        }
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (e) {
            // LocalStorage unavailable; ignore.
        }
        if (toggle) {
            toggle.setAttribute("aria-pressed", theme === "dark");
        }
    }

    function getSavedTheme() {
        try {
            return localStorage.getItem(STORAGE_KEY);
        } catch (e) {
            return null;
        }
    }

    function getSystemTheme() {
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }

    function ensureToggle() {
        if (toggle) return;
        toggle = document.querySelector(".theme-toggle");
        if (!toggle) {
            toggle = document.createElement("button");
            toggle.type = "button";
            toggle.className = "theme-toggle";
            toggle.setAttribute("aria-label", "Toggle dark mode");
            toggle.textContent = "\u{1F315}"; // 🌓
            body.appendChild(toggle);
        }
        toggle.addEventListener("click", function () {
            let isDark = html.hasAttribute("data-theme");
            setTheme(isDark ? "light" : "dark");
        });
    }

    function init() {
        let saved = getSavedTheme();
        let theme = saved ? saved : getSystemTheme();
        setTheme(theme);

        if (!saved) {
            window
                .matchMedia("(prefers-color-scheme: dark)")
                .addEventListener("change", function (e) {
                    setTheme(e.matches ? "dark" : "light");
                });
        }

        ensureToggle();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
