import { useDispatch, useSelector } from "react-redux";
import plants from "../assets/plants.json";
import ProductHeader from "../components/ProductHeader";
import { addItem } from "../redux/slices/global";

export default function Products() {
  const items = useSelector((s) => s.global.items);

  const dispatch = useDispatch();

  return (
    <div className="p-5">
      <ProductHeader />
      <div className="mb-4">
        {Object.entries(plants.houseplants).map(([category, houseplants]) => (
          <div
            key={category}
            className="d-flex flex-column my-2"
            id={category.toLowerCase()}
          >
            <h3 className="align-self-center">{category}</h3>
            <div className="d-flex mt-4">
              {houseplants.map((plant) => (
                <div
                  style={{
                    width: "250px",
                    height: "500px",
                  }}
                  className="m-5"
                  key={plant.name}
                >
                  <img
                    src={plant.image}
                    alt="plant-image"
                    className="w-100 h-50 rounded"
                  />
                  <h6 style={{ fontWeight: "bold" }} className="my-2">
                    {plant.name}
                  </h6>
                  <h6 className="my-2 text-muted">{plant.description}</h6>
                  <div className="d-flex justify-content-between align-items-center my-4">
                    {items.find((i) => i.item.name === plant.name) ? (
                      <button
                        disabled
                        type="button"
                        className="btn btn-secondary"
                      >
                        Added
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={() => dispatch(addItem(plant))}
                      >
                        Add to Cart
                      </button>
                    )}
                    <h6 className="h5">₹{plant.price}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
