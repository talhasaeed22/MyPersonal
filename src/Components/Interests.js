import React from 'react';
import './Interests.css';
import bike from '../img/bike.jpg';
import train from '../img/train.jpg';
import cricket from '../img/cricket.jpeg';
function Interests(props) {
  return (
      <>
        <div style={{color:'white'}} className="my-5 head-container container d-flex flex-column justify-content-center align-items-center">
            <h1 style={{color:'white', textAlign:'center'}}>Interests</h1>
            <p className='w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut a exercitationem quod, facere voluptates alias quas reprehenderit, quaerat fugit id. Sequi neque vitae aspernatur? Explicabo quam cum tempora! Quaerat.</p>
        </div>
        <div className = {`container my-5 interests-container p-4 bg-${props.mode === 'light'?'light':'dark'} text-${props.mode === 'light'?'dark':'light'}`} >
            <div className="row my-3">
              <div className="col-md-4 offset-md-2 py-2 col-sm-10">
              <h2>Bike Riding</h2>
              <p>Riding takes effort, especially compared to driving in a car. Not only is it a physical and mental workout, it is considered most exciting way of traveling. Bike Riding is though considered a dangerous way of travel, but for those haivng passion and love of riding, it is nothing. My Hobbies includes bike riding. I love to ride bike all over the Pakistan.</p>
              </div>
              <div className="col-md-6 py-2 col-sm-10">
                  <img src={bike} alt="bike" className="thumbnail" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-4 offset-md-2 py-2 col-sm-10">
              <h2>Travelling</h2>
              <p>I love to travel over the world. From childhood, this is my dream to travel over the world. I used to travel many places in Pakistan with family and sometimes with friends. I have experienced many mode of transport. But my favourite is traveling thorugh Trains</p>
              </div>
              <div className="col-md-6 py-2 col-sm-10">
                  <img src={train} alt="train" className="thumbnail" />
              </div>
            </div>
            <div className="row my-3">
              <div className="col-md-4 offset-md-2 py-2 col-sm-10">
              <h2>Cricket</h2>
              <p>Cricket is my favourite Sport. It is one of the most loved sports. It is the most exciting game in our country and is also played in many countries worldwide. Cricket is one of the most popular games played in Pakistan for children and adults. It is a fascinating game in our country, and it is played in many countries of the world.</p>
              </div>
              <div className="col-md-6 py-4 col-sm-10">
                  <img src={cricket} alt="cricket" className="thumbnai" />
              </div>
            </div>
        </div>
      </>
  );
}

export default Interests;
