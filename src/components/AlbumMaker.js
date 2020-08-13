import React from 'react';
import Img from './Img';
//import PhotoEntry from './PhotoEntry';
//import entries from './data/photo-entries';

const AlbumMaker = props =>{
  const result = props.data;
    let imgs =  result.map(img => <Img url={img.url.small} key={img.id} />); 
  
  return (
    <div>{imgs}</div>
  );
};
  

export default AlbumMaker;
