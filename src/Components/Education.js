import React from 'react';
import school from '../img/school.jpg';
import college from '../img/college.jpg';
import university from '../img/university.jpg';
import './Interests.css'

function Education(props) {
    return (
        <>
            <div style={{ color: 'white' }} className="my-5 head-container container d-flex flex-column justify-content-center align-items-center">
                <h1 style={{ color: 'white', textAlign: 'center' }}>Education</h1>
                <p className='w-50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ut a exercitationem quod, facere voluptates alias quas reprehenderit, quaerat fugit id. Sequi neque vitae aspernatur? Explicabo quam cum tempora! Quaerat.</p>
            </div>
            <div className={`container my-5 interests-container p-4 bg-${props.mode === 'light' ? 'light' : 'dark'} text-${props.mode === 'light' ? 'dark' : 'light'}`} >
                <div className="row my-3">
                    <div className="col-md-4 offset-md-2 py-2 col-sm-10">
                        <h2>MATRIC</h2>
                        <p>
                            <li>I have done Matric from The Educators School.</li>
                            <li>I have studied Maths and Science from school.</li>
                            <li>I have passed Matric with 90% plus marks and performed well in school</li>
                        </p>
                    </div>
                    <div className="col-md-6 py-2 col-sm-10">
                        <img src={school} alt="school" className="thumbnail" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-4 offset-md-2 py-2 col-sm-10">
                        <h2>INTERMEDIATE</h2>
                        <p>
                            <li>I have done Intermediate from Punjab College.</li>
                            <li>I have studied Maths and Science from College.</li>
                            <li>I have passed College with 83% plus marks</li>
                        </p>
                    </div>
                    <div className="col-md-6 py-2 col-sm-10">
                        <img src={college} alt="college" className="thumbnail" />
                    </div>
                </div>
                <div className="row my-3">
                    <div className="col-md-4 offset-md-2 py-2 col-sm-10">
                        <h2>BACHELOR</h2>
                        <p>
                            <li>I am doing my bachelor from Comsats University Islamabd.</li>
                            <li>I have selected Computer Science Degree.</li>
                            <li>i Have completed half of my degree with 3.3 plus CGPA</li>

                        </p>
                    </div>
                    <div className="col-md-6 py-4 col-sm-10">
                        <img src={university} alt="university" className="thumbnai" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;
