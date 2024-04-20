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
          value={50}
          title="$0 -$999 "
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={100}
          title="$999 - $1999"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$1999 - $2999"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={150}
          title="$2999 - $3999"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={200}
          title="Over $5999"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;