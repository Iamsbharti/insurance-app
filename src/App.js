import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { InputForm } from "./components/InputForm";
function App() {
  return (
    <div>
      <section>
        <Navbar />
        <InputForm />
        <Footer />
      </section>
    </div>
  );
}

export default App;
