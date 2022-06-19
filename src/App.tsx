import Advanced from "./components/Advanced";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";

function App() {
  return (
    <Layout>
      <Header />
      <main>
        <Main />
        <Form />
        <Advanced />
        <Boost />
        <Footer />
      </main>
    </Layout>
  );
}

export default App;
