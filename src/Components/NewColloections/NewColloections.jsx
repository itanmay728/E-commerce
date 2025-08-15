import React from 'react'
import './NewColloections.css'
import new_collection from '../assets/new_collections'
import Item from '../Item/Item'

const NewColloections = () => {
  return (
    <div className="new-colloections">
        <h1>NEW COLLECTIONS</h1>
        <hr />

        <div className="collections">
            {new_collection.map((item, i)=>{
                return <Item  key = {i} id={item.id} name={item.name} image = {item.image} new-price = {item.new_price} old_price = {item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewColloections