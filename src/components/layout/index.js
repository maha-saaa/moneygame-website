import Header from "src/components/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
