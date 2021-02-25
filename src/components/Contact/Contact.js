import React from 'react';
import MyFace from './MyFace.jpg';

const Contact = () => {
    return (
        <div>
            <img className='headshot' src={MyFace} alt='Chris Asmar Headshot' />
            <h1>Email: <a href="mailto:asmarcd@gmail.com">asmarcd@gmail.com</a></h1>
            <h1>Github: <a href="https://github.com/asmarcd">github.com/asmarcd</a></h1>
            <h1>LinkedIn: <a href="https://www.linkedin.com/in/chrisasmar/">linkedin.com/chrisasmar</a></h1>
        </div>
    )
}

export default Contact;