import React from 'react';
import './Home.css'
import picture from '../img/profile.jpg'
function Home(props) {
    return (
        <>

            <div style={{ backgroundColor: props.mode === 'light' ? 'white' : '#212529', color: props.mode === 'light' ? 'black' : 'white' }} className="container d-flex home-container">
                <div className="row">
                    <div className="col-lg-6 col-md-12 my-4 mx-2">
                        <img className='img-thumbnail' src={picture} alt="myPicture" style={{ borderRadius: '20px' }} />
                    </div>
                    <div className="col-lg-4 offset-lg-1 col-md-12 ">
                        <div className="content d-flex flex-column">
                            <p style={{ fontSize: '1.4rem' }} className='my-2'>HELLO EVERYBODY, I AM </p>
                            <h2 style={{ textAlign: 'center' }}>MUHAMMAD TALHA SAEED</h2>
                            <p style={{ fontSize: '1.3rem' }} >WEB DEVELOPER</p>
                            <p  >Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis alias ab, consequuntur laborum temporibus vero quaerat mollitia voluptate, rerum voluptatibus natus atque sequi eos a pariatur esse reprehenderit facere debitis?</p>
                            <h3 className='mx-3' style={{ textDecoration: 'underline' }}>Social Accounts</h3>
                            <div className="icon">
                                <a rel="noreferrer" href="https://www.facebook.com/talha.saeed.1023"><i style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="fa fa-facebook" aria-hidden="true"></i> </a>
                                <a rel="noreferrer" href="https://www.instagram.com/talha_saeed2.2/"><i style={{ color: props.mode === 'light' ? 'black' : 'white' }} className="fa fa-instagram" aria-hidden="true"></i> </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container d-flex about-container my-5">
                <div className="row">
                    <div className="col-lg-4 col-sm-12">
                        <div style={{ border: props.mode === 'light' ? '1px solid grey' : '1px solid black' }} className="boxes m-5 mx-3 p-3 " id="boxes1">
                            <h2>About Me</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique rem id alias, impedit temporibus expedita numquam laboriosam! Voluptas ipsum nesciunt quaerat hic asperiores rem fugiat sapiente tempora, excepturi minus?</p>
                        </div>
                    </div>
                    <div className="col-lg-8 col-sm-12">
                        <div style={{ border: props.mode === 'light' ? '1px solid grey' : '1px solid black' }} className="boxes m-5 mx-3  " id="boxes1">
                            <div className="experience">
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">PYTHON 70%</div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">REACT 80%</div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">DATABASE 100%</div>
                                </div>
                                <div className="progress">
                                    <div className="progress-bar" style={{ width: '90%' }}>JAVA 90%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div style={{border:props.mode === 'light'?'1px solid grey':'1px solid black'}} className="boxes m-5 mx-3 p-5 w-50" id="boxes1">
                    <h2>About Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam similique rem id alias, impedit temporibus expedita numquam laboriosam! Voluptas ipsum nesciunt quaerat hic asperiores rem fugiat sapiente tempora, excepturi minus?</p>
                </div>
                <div style={{border:props.mode === 'light'?'1px solid grey':'1px solid black'}} className="boxes m-5 mx-3 px-5 w-75" id="boxes1">
                    <div className="experience">
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">PYTHON 70%</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">REACT 80%</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">DATABASE 100%</div>
                        </div>
                        <div className="progress">
                            <div className="progress-bar" style={{ width: '90%' }}>JAVA 90%</div>
                        </div>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default Home;
