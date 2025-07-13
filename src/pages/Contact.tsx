function Contact() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
            <p>If you have any questions or need further information, feel free to reach out to us.</p>
            <form className="mt-6">
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                    <input type="text" id="name" className="w-full p-2 border rounded" placeholder="Your Name" />
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                    <input type="email" id="email" className="w-full p-2 border rounded" placeholder="Your Email"/>
                </div>

                <div className="mb-4">
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Message</label>
                    <textarea id="message" className="w-full p-2 border rounded"  placeholder="Your Message"></textarea>
                </div>
                <button type="submit" className="bg-sky-600 hover:bg-sky-700 transition-colors duration-300 text-white px-6 py-3 rounded-full shadow-md">
                    Send Message
                </button>
            </form>
        </div>
    )
}

export { Contact }