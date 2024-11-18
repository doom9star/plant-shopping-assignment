import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function ProductHeader() {
  const totalItems = useSelector((s) => s.global.totalItems);

  const navigate = useNavigate();

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
        <h1 className="display-6 mb-1">Plant Shopping</h1>
        <p className="text-success" style={{ fontWeight: "bold" }}>
          one-stop destination for all things green.
        </p>
      </div>
      <div className="d-flex align-items-center">
        <div className="d-flex mx-5">
          <a href="#low-maintenance" className="mx-3">
            Low-Maintenance
          </a>
          <a href="#flowering" className="mx-3">
            Flowering
          </a>
          <a href="#air-purifying" className="mx-3">
            Air-Purifying
          </a>
        </div>
        <div
          className="position-relative"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/cart")}
        >
          <div
            className="position-absolute text-danger"
            style={{ top: "20%", right: "35%", fontWeight: "bold" }}
          >
            {totalItems}
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </div>
      </div>
    </div>
  );
}
