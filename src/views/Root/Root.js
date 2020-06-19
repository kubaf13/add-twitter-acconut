import React from "react";
import "./index.css";
import AppContext from '../../context';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TwittersView from '../TwitterView/TwitterView';
import ArticlesView from '../ArticlesView/ArticlesView';
import NotesView from '../NotesView/NotesView';
import Header from '../../components/Header/Header';
import Modal from '../../components/Modal/Modal';
 
class Root extends React.Component {
  state = {
    twitter: [
      {
        title: 'Manchester United',
        description: 'Red Devils',
        link: 'https://twitter.com/ManUtd',
        image: 'https://pbs.twimg.com/profile_images/1225681489544667136/uhXbzNkl_400x400.jpg'
      },
      {
        title: 'Juan Mata',
        description: 'Member of @CommonGoalOrg',
        link: 'https://twitter.com/juanmata8',
        image: 'https://scontent-mad1-1.cdninstagram.com/v/t51.2885-15/e35/p1080x1080/87620106_673906833383307_98296682138910248_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=103&_nc_ohc=yNv5yPjRXcAAX8Z2MrG&oh=9eb1b16cdc1d64de43c18f8a997eca24&oe=5F1365AC'
      }
    ],
    article: [],
    note: [],
    isModalOpen: false,
  };

  addItem = (e, newItem) => {
    e.preventDefault();
    
    this.setState(prevState => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));
    
    this.closeModal();
  };
  
  openModal = () => {
    this.setState({
      isModalOpen: true,
    })
  }
  
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    })
  }

  render() {
    const { isModalOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem
    }
    
    return (
      <BrowserRouter>
        <AppContext.Provider value={contextElements}>
          <Header openModalFn={this.openModal} />
          <Switch>
            <Route exact path="/" component={TwittersView} />
            <Route path="/articles" component={ArticlesView} />
            <Route path="/notes" component={NotesView} />
          </Switch>
          { isModalOpen && <Modal closeModalFn={this.closeModal} /> }
        </AppContext.Provider>
      </BrowserRouter>
    );
  }
}

export default Root;

// 3. Dopasować Form.js do nowych potrzeb
// 4. Przystosować widoki podstron do nowych itemów
// 5. Wyświetlać odpowiednie notatki na podstronach 
