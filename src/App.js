import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { InputForm } from "./components/InputForm";
import { Route, Switch } from "react-router-dom";
import { Admin } from "./components/Admin";
import { Home } from "./components/Home";
import { ToastContainer } from "react-toastify";
import { QuoteConfirmation } from "./components/QuoteConfirmation";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/quote">
          <InputForm />
        </Route>
        <Route exact path="/quote/success/:id">
          <QuoteConfirmation />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
      <Footer />
      <ToastContainer autoClose={2000} hideProgressBar />
    </div>
  );
}

export default App;
