import GitHubButton from "react-github-btn";

export default function Footer() {
  return (
    <footer className="w-full border-t dark:border-metal dark:bg-github">
      <div className="mx-auto w-full max-w-7xl px-4 py-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <nav className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-primary">
            <a
              href="#"
              className="dark:text-secondary text-black transition-colors hover:underline"
            >
              © 2025 Alexander Marin
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <GitHubButton
              href="https://github.com/CodingMarin/github-portfolio"
              data-color-scheme="no-preference: dark_high_contrast; light: dark_dimmed; dark: light;"
              data-size="large"
              aria-label="Use this template CodingMarin/consulta-ruc-dni-sunat on GitHub"
            >
              Use this template
            </GitHubButton>
          </div>
        </div>
      </div>
    </footer>
  );
}
