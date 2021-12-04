import { useEffect, useState } from "react";
import "../styles/signin.css";
import AddCategory from "./AdminComps/AddCategory";
import AddProduct from "./AdminComps/AddProduct";
import CreateAdmin from "./AdminComps/CreateAdmin";
import DeleteUser from "./AdminComps/DeleteUser";
import FindUser from "./AdminComps/FindUser";
const PostAdminPage = () => {
  const onAdminButtonClick = (e) => {
    Object.keys(buttons).forEach((v) => (buttons[v] = false));
    setButtons({
      ...buttons,
      [e.target.name]: true,
    });
  };
  useEffect(() => {
    document.title = "Admin Page";
  }, []);
  const [buttons, setButtons] = useState({
    addproduct: true,
    finduser: false,
    addcategory: false,
    deleteuser: false,
    createadmin: false,
  });
  return (
    <div>
      <div className="adminmain">
        <div className="float-child2">
          <div className="adminleft">
            <div className="adminName">
              <h2>Administrator</h2>
              <h1>Management</h1>
            </div>
            <div className="adminButtons">
              <button
                name="addproduct"
                className={
                  buttons.addproduct ? "adminSelected" : "adminNotSelected"
                }
                onClick={onAdminButtonClick}
              >
                Add Product
              </button>
              <button
                name="finduser"
                className={
                  buttons.finduser ? "adminSelected" : "adminNotSelected"
                }
                onClick={onAdminButtonClick}
              >
                Find User
              </button>
              <button
                name="addcategory"
                className={
                  buttons.addcategory ? "adminSelected" : "adminNotSelected"
                }
                onClick={onAdminButtonClick}
              >
                Add Category
              </button>
              <button
                name="deleteuser"
                className={
                  buttons.deleteuser ? "adminSelected" : "adminNotSelected"
                }
                onClick={onAdminButtonClick}
              >
                Delete User
              </button>
              <button
                name="createadmin"
                className={
                  buttons.createadmin ? "adminSelected" : "adminNotSelected"
                }
                onClick={onAdminButtonClick}
              >
                Create Admin
              </button>
            </div>
          </div>
        </div>
        <div className="float-child2">
          <div className="adminright">
            {buttons.addproduct && <AddProduct />}
            {buttons.finduser && <FindUser />}
            {buttons.addcategory && <AddCategory />}
            {buttons.deleteuser && <DeleteUser />}
            {buttons.createadmin && <CreateAdmin />}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostAdminPage;
