import React from 'react';

function Experience(props) {
  return (
      <>
         <div style={{ color: 'white' }} className="my-5 head-container container d-flex flex-column justify-content-center align-items-center">
            <h1 style={{ color: 'white', textAlign: 'center' }}>Experience</h1>
            <p className='w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut a exercitationem quod, facere voluptates alias quas reprehenderit, quaerat fugit id. Sequi neque vitae aspernatur? Explicabo quam cum tempora! Quaerat.</p>
        </div>
        <div className={`container my-5 interests-container p-4 bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                <div className="row my-3">
                    <div className="col-md-12 py-2 col-sm-12">
                    <div className="experience">
                        <h1>Experience in Different Languages</h1>
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
      </>
  );
}

export default Experience;
