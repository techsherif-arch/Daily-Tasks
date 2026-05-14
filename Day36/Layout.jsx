import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <div>
      <Header title="My React App" />
      {children}
      <Footer text="© 2026" />
    </div>
  );
}

export default Layout;