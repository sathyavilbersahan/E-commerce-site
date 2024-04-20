
import Price from "./Colors/Price/Price";
import Colors from "./Colors/Colors";
import "./Sidebar.css";
import Category from "./Category/Category";

const Sidebar = ({ handleChange }) => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange} />
        <Colors handleChange={handleChange} />
      </section>
    </>
  );
};

export default Sidebar;