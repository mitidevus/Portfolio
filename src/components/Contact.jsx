/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

function Contact() {
    return (
        <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
            <form
                method="POST"
                action="https://getform.io/f/e1c240d0-b667-40cd-900c-48d1d95447c5"
                className="flex flex-col max-w-[600px] w-full"
            >
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                    <p className="text-gray-300 py-4">
                        // Submit the form bellow or send me an email:{" "}
                        <a className="text-pink-600 font-bold" href="mailto:minhtri.do2410@gmail.com">
                            minhtri.do2410@gmail.com
                        </a>
                    </p>
                </div>
                <input className="p-2 bg-[#ccd6f6]" type="text" placeholder="Name" name="name" />
                <input className="my-4 p-2 bg-[#ccd6f6]" type="email" placeholder="Email" name="email" />
                <textarea className="p-2 bg-[#ccd6f6]" name="message" placeholder="Message" rows="10"></textarea>
                <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
                    Let's Collaborate
                </button>
            </form>
        </div>
    );
}

export default Contact;
