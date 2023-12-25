import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Error from "./Error";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from "../pages/SearchResults";

import BlogcategoryList from "../pages/BlogcategoryList"
import ScrollToTop from "../ScrollToTop";
import DetailsCard from "../pages/DetailsCard";





const Index = () => {
  return (
    <>
      <Router>

      <ScrollToTop />
        
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Navbar/>
         
         <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/category/:categorySlug" component={BlogcategoryList}/>
            <Route exact path="/card-details/:slug" component={DetailsCard}/>
            <Route exact path="/search-results" component={SearchResults}/>

            <Route path="*"><Error/></Route>
          </Switch>

       <Footer/>
      </Router>
    </>
  );
};

export default Index;
