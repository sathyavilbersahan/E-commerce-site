import Input from "../../../Components/Input"
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={500}
          title="$0 -$999 "
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1000}
          title="$999 - $1499"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1500}
          title="$1500 - $1999"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={2000}
          title="$2000 - $2499"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
