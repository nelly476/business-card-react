function Info() {
  return (
    <div className="info--section">
      <img src="./src/assets/profile-pic.jpg" alt="Profile picture" />
      <h2>Nelly Bulatova</h2>
      <p className="job-title">Frontend developer</p>
      <p>https://github.com/nelly476</p>
      <div className="info--buttons">
        <button className="email--button">
          {" "}
          <i className="fa-solid fa-envelope"></i>Email
        </button>
        <button className="linkedin--button">
          <i className="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
