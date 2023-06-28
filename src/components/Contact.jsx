

const Contact = () => {
  return (
    <div className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4" name="contact">
        <form method="POST" action="https://getform.io/f/ee032121-355d-4bff-8e12-b50366f782ec" className="flex flex-col max-w-[600px] w-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">Contact</p>
                <p className="text-gray-300 py-4">Submit the form below or shoot me an email - mallory.shackford@gmail.com</p>
            </div>
            <input className="bg-[#ccd6f6] p-2" type="text" placeholder="Name" name="name"></input>
            <input className="my-4 p-2 bg-[#ccd6f6]" type="text" placeholder="Email" name="email"></input>
            <textarea className="bg-[#ccd6f6] p-2" name="message" placeholder="Message" rows="10"></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact