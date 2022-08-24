

function Contact() {
    return (
        <section>
            <form>
                <input onChange={handleInputChange} value={inputValue} type="text" placeholder="Input your name" />
                <button onClick={handleFormSubmit}>Submit</button>
            </form>
        </section>
    )
}

export default Contact;