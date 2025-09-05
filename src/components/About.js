import React from 'react';

export default function About(props) {

    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }

    return (
        <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
            <h1 className='my-3'>About Us</h1>
            <div className="accordion" id="accordionExample">

                {/* Analyse Your Text */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyse Your Text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a simple yet powerful text manipulation tool designed to help you analyze, edit, and enhance your text quickly and efficiently. Whether you want to <strong>count words and characters</strong>, <strong>convert text to uppercase or lowercase</strong>, <strong>capitalize words</strong>, <strong>remove extra spaces</strong>, <strong>reverse text</strong>, or even <strong>copy and speak text</strong>, TextUtils provides you with everything you need in one place.
                            It is built to be fast, responsive, and beginner-friendly, making it perfect for students, professionals, and anyone who works with text regularly.
                        </div>
                    </div>
                </div>

                {/* Free To Use */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a <strong>completely free</strong> and <strong>ad-free</strong> online tool that provides instant results without any sign-ups or hidden charges.
                            It gives accurate statistics for <strong>word count, character count, and reading time</strong>, making it ideal for writers, students, and bloggers.
                            If you're preparing essays, posts, reports, or social media content, TextUtils ensures your text meets the desired limits effortlessly.
                        </div>
                    </div>
                </div>

                {/* Browser Compatible */}
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils works seamlessly on <strong>all major web browsers</strong> like Chrome, Firefox, Safari, Edge, and Opera.
                            Whether you’re using a <strong>PC, laptop, tablet, or mobile phone</strong>, you get the same smooth and responsive experience.
                            It can also be used to count characters or words for platforms like <strong>Facebook, Twitter, Instagram captions, blog posts, research papers, PDFs, and essays</strong> without any hassle.
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
