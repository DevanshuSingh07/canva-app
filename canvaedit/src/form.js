
function Form() {
    return (
      <>
      <div className="mb-3">
    <label for="exampleFormControlInput1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
  </div>
  <div className="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  </>
    );
  }

  export default Form;