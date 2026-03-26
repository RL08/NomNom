import "@/layouts/footer/Footer.css"
import P from "@/components/ui/p/P.jsx";

function Footer() {
  return (
    <>
      <footer className="footer">
        <P>
          NomNom &mdash; Powered by{" "}
          <a
            href="https://www.themealdb.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TheMealDB
          </a>
        </P>
      </footer>
    </>
  );
}

export default Footer
