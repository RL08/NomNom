import "@/layouts/footer/Footer.css"

function Footer() {
  return (
    <>
      <footer className="footer">
        <p>
          NomNom &mdash; Powered by{" "}
          <a
            href="https://www.themealdb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TheMealDB
          </a>
        </p>
      </footer>
    </>
  );
}

export default Footer
