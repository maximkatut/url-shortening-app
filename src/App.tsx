import Advanced from "./components/Advanced";
import Boost from "./components/Boost";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Main from "./components/Main";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const { storedValue, setValue } = useLocalStorage("shorts");

  return (
    <Layout>
      <Header />
      <main>
        <Main />
        <Form setShorts={setValue} />
        <Advanced shorts={storedValue} />
        <Boost />
        <Footer />
      </main>
    </Layout>
  );
}

export default App;
