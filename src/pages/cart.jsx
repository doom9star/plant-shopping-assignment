import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  decrementItem,
  deleteItem,
  incrementItem,
} from "../redux/slices/global";

export default function Cart() {
  const items = useSelector((s) => s.global.items);
  const totalPrice = useSelector((s) => s.global.totalPrice);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      style={{ width: "100vw", height: "100vh" }}
      className="d-flex justify-content-center my-5"
    >
      <div className="w-50 h-50">
        <div className="d-flex justify-content-between align-items-center my-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
          <div className="d-flex align-items-center">
            <h6 className="h5" style={{ fontWeight: "bold" }}>
              -/ ₹{totalPrice}
            </h6>
            {items.length > 0 && (
              <button type="button" className="btn btn-success mx-4">
                Checkout
              </button>
            )}
          </div>
        </div>
        <div className="d-flex flex-column my-2">
          {items.map((i) => (
            <div key={i.item.name} className="d-flex my-2">
              <img
                src={i.item.image}
                alt="plant-image"
                className="rounded"
                style={{ widows: "250px", height: "250px" }}
              />
              <div className="mx-5">
                <h6 style={{ fontWeight: "bold" }} className="my-2">
                  {i.item.name}
                </h6>
                <h6 className="my-2">{i.item.description}</h6>
                <div className="my-3 d-flex">
                  <h6>₹{i.item.price}</h6>
                  <h6 style={{ fontWeight: "bold" }} className="mx-3">
                    x{i.quantity}
                  </h6>
                </div>
                <div className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => dispatch(decrementItem(i.item))}
                      disabled={i.quantity <= 1}
                    >
                      -
                    </button>
                    <h6 className="mx-3">{i.quantity}</h6>
                    <button
                      type="button"
                      className="btn btn-light"
                      onClick={() => dispatch(incrementItem(i.item))}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-danger mx-4"
                    onClick={() => dispatch(deleteItem(i.item))}
                  >
                    Delete
                  </button>
                </div>
                <h6 className="my-3" style={{ fontWeight: "bold" }}>
                  ₹{i.item.price * i.quantity}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
