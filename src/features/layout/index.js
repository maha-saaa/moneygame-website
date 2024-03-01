import Header from "src/features/header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
