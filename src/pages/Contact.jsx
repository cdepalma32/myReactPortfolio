function Contact() {
  return (
      <div className="m-3"> {/* Adds margin to all sides of the container */}
          <h1 className="mb-4">This is the Contact Page</h1> {/* Adds bottom margin to the header */}
          <form className="mt-3"> {/* Adds top margin to the form */}
              <label className="form-label d-block mb-3">Enter your name:
                  <input type="text" className="form-control mt-2" /> {/* Adds top margin to the input field */}
              </label>
          </form>
      </div>
  )
}

export default Contact;
