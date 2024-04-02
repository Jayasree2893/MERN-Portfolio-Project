import ScrollToTop from "react-scroll-to-top";

import Layout from "./components/Layout/Layout";

function App() {
  return (
    <>
      <Layout />
      <ScrollToTop
        smooth
        color="#ff7f50"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;