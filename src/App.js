import "./App.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { InputForm } from "./components/InputForm";
import { Route, Switch } from "react-router-dom";
import { Admin } from "./components/Admin";
import { Home } from "./components/Home";

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
        <Route path="/admin">
          <Admin />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
