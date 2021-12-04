import "../../styles/signin.css";
const CreateAdmin = () => {
  return (
    <div className="mainHeader">
      <h1>Add Admin</h1>
      <div className="adminforms">
        <input placeholder="Full Name" className="adminField" type="text" />
        <input placeholder="Email" className="adminField" type="text" />
        <input placeholder="CNIC" className="adminField" type="text" />
        <input placeholder="Phone Number" className="adminField" type="text" />
        <input placeholder="Password" className="adminField" type="text" />
        <button className="adminField">Create Admin</button>
      </div>
    </div>
  );
};
export default CreateAdmin;
