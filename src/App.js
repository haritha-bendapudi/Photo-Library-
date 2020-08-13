import React from 'react';
import axios from 'axios';

import FilterImages from './components/FilterImages';
import BannerImage from './components/BannerImage';
import './App.css';
import SearchBar from './components/SearchBar';
import AlbumMaker from './components/AlbumMaker';


class App extends React.Component {

  state={images: []};

  onSearchSubmit = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos?travel', {
      params: {query:term},
      headers: {
        Authorization: 'Client-ID fCrJtMDaRTz2HBjmaO9KSMrSiYFlYpPOmTCCaHa6ln0'
      }
    })
    console.log(response);
    this.setState({ images: response.data.results})
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <BannerImage />
        <div>
          <h1>Welcome to My Photojournal</h1>
          <h3>Haritha Bendapudi</h3>
          <div>
      
	        <SearchBar userSubmit={this.onSearchSubmit}/>
          <span>Found: {this.state.images.length} images</span>
          <FilterImages foundImages={this.state.images} />

          </div>
        </div>
      </header>
    </div>
  );
}
}

export default App;
