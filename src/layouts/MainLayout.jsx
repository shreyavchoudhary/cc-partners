import "../styles/Layout.css";

function MainLayout({ children }) {
  return (
    <section className="site-background">
      {children}
    </section>
  );
}

export default MainLayout;