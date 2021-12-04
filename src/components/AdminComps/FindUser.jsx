import "../../styles/signin.css";
const FindUser = () => {
  return (
    <div className="mainHeader">
      <h1>Find User</h1>
      <div className="adminforms">
        <input
          placeholder="Enter Username"
          className="adminField"
          type="text"
        />
      </div>
    </div>
  );
};
export default FindUser;
