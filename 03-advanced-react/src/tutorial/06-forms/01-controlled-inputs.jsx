const ControlledInputs = () => {
  return (
    <form className="form">
      <h4>controlled inputs</h4>
      <div className="form-row">
        <label htmlFor="name" className="form-label">name</label>
        <input type="text" className="form-input" id="name" />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">email</label>
        <input type="email" className="form-input" id="email" />
      </div>
      <button className="btn btn-block" type="submit">submit</button>
    </form>
  );
};
export default ControlledInputs;
