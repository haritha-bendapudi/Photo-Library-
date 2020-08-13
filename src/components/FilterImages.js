import React from 'react';
//import PhotoEntry from './PhotoEntry';
//import entries from './data/photo-entries';

const FilterImages = (props) =>{
  const imgs = props.foundImages.map(img => {
    return <img key={img.id} src={img.urls.regular} alt={img.alt_description} />
  });
  //console.log(props.foundImages);

    return (
      <div>{imgs}</div>
    )

  }

export default FilterImages;
