import React from 'react'
 
const MenuCard = ({menuData}) => {
  return (
    <>
        {
            menuData.map((curElem) => {
                const {id, name, category, image, description} = curElem;
                return(
                    <>
                    <div className='card-container' key={curElem.id}>
                    <div className='card'>
                         <div className='card-body'>
                           <span className='card-number card-circle subtle'>{curElem.id}</span>
                        <span className='card-author subtle'>{curElem.name}</span>
                        <h2 className='title'>{curElem.name}</h2>
                         <span className='card-description subtle'>
                            {curElem.description}
                       </span>
                      
                        </div>
                       <img src={curElem.image} alt='image' className='card-media'/>
                       
                    </div>
                
                 </div>
                     </>
                );
            })
        }</>
     
    
  );
};

export default MenuCard;
