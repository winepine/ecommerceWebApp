import "../../styles/signin.css";
const AddCategory = () => {
  const addCat = async () => {};
  return (
    <div className="mainHeader">
      <h1>Add Category</h1>
      <div className="adminforms">
        <input placeholder="Category Name" className="adminField" type="text" />
        <input
          placeholder="Parent Category (Optional)"
          className="adminField"
          type="text"
        />
      </div>
    </div>
  );
};
export default AddCategory;
