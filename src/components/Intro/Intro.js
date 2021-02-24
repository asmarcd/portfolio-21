import React from 'react';
import MyFace from './MyFace.jpg';

const Intro = () => {


    return (
        <div>
            <h5>I build software for the modern online world</h5>
            <img className='headshot' src={MyFace} alt='Chris Asmar Headshot' />
            <p>
                I've been working in tech in a variety of roles for over 7 years. I started off in 2014 at an LA based startup called NationBuilder, teaching people who were running for office for the first time how to build up their digital presence and their campaign infrastructure. Like a lot of young companies, customer-facing reps are often in charge of a wide variety of projects, so I dipped my toes in the water with Customer Success, Sales, Support, Professional Services, Product, and even HR. That's where I got my first glimpse into coding, learning basic HTML, CSS, Liquid, and Ruby on Rails to help customers troubleshoot and improve their sites. I worked at NationBuilder for five years, eventually becoming a manager on the Customer Success team and taking on Sales Operations as well.
            </p>
            <p>
                In 2018, I moved to Seattle and started at a small company called Luum, running their Customer Success department. In 2019, I joined the Customer Success team at Outreach, a fast-growing SaaS company helping sales leaders build better workflows for their teams. After 7 years in Sales and Account Management, I decided it was time for a change, and enrolled in the UW Coding Bootcamp to develop a skillset where I can  be creative and build something myself that people will love.
            </p>
            <p>
                In another lifetime, before all that, I worked on international relations and local campaign politics. Once  we're done talking coding, ask me about the time I helped remove land mines in Palestine.
            </p>
            <a href="mailto:asmarcd@gmail.com">Email</a> || <a href = "https://www.linkedin.com/in/chrisasmar/">LinkedIn</a> || <a href = "https://github.com/asmarcd">Github</a>
        </div>
    )
}

export default Intro;