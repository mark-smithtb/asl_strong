import { BrowserRouter, Route } from 'react-router-dom'
import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';


import HomePage from './HomePage'
import AboutPage from './AboutPage'
import CategoriesPage from './CategoriesPage'
import EnglishDictionaryPage from './EnglishDictionaryPage'
import HandShapeDictionaryPage from './HandShapeDictionaryPage'
import Header from './Header'
import SideMenu from './SideMenu'
import Footer from './Footer'
import '../css/aslstrong.scss';
const store = configureStore();

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div id="aslstrong">
        <Header/>
        <SideMenu/>
        <main>
          <Route path='/' exact component={HomePage}/>
          <Route path='/about' exact component={AboutPage}/>
          <Route path='/categories' exact component={CategoriesPage} />
          <Route path='/Dictionary/English' exact component={EnglishDictionaryPage} />
          <Route path='/Dictionary/HandShape' exact component={HandShapeDictionaryPage} />
        </main>
        <Footer/>
      </div>
      </BrowserRouter>
    )
  }
}
