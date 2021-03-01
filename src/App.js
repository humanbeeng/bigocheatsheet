import NavbarClass from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Container} from 'react-bootstrap'
import Search from './components/Search'
import Heaps from './components/Heaps'
import Landing from './components/Landing'
import DataStructures from './components/DataStructures'
import Graphs from './components/Graphs'
import Overview from './components/Overview'
import Sort from './components/Sort'
import AboutMe from './components/AboutMe'


function App() {
  return (
    <Router>
      <NavbarClass />
      <main>
        <Route path="/" component={Landing} exact />
        <Container>
          <Route path="/search" component={Search} exact />
          <Route path='/datastructures' component={DataStructures}/>
          <Route path="/heaps" component = {Heaps} />
          <Route path="/graphs" component = {Graphs} />
          <Route path="/overview" component = {Overview} />
          <Route path="/sort" component = {Sort} />
          <Route path="/aboutme" component = {AboutMe} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
