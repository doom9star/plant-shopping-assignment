import { useNavigate } from "react-router-dom";
import background from "../assets/background.jpg";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <img
        src={background}
        alt="background"
        style={{ width: "100vw", height: "100vh" }}
      />
      <div
        className="bg-black opacity-50 position-absolute top-0"
        style={{ width: "100vw", height: "100vh" }}
      />
      <div
        className="position-absolute top-0 text-white d-flex flex-column justify-content-center align-items-center"
        style={{ width: "100vw", height: "100vh" }}
      >
        <div className="w-50">
          <h1 className="display-1 mb-4">Plant Shopping</h1>
          <p className="mb-4">
            Welcome to our online plant shop, your{" "}
            <span className="bg-white text-success px-2">
              one-stop destination for all things green
            </span>{" "}
            and beautiful! Whether you&apos;re a seasoned gardener or just
            starting your journey of nurturing plants, we offer a wide variety
            of options to suit every space and style. From vibrant indoor plants
            that purify the air to low-maintenance succulents perfect for busy
            lifestyles, we bring nature closer to your home. Explore our curated
            selection of flowering plants, herbs, and decorative pots designed
            to enhance your living space. Let&apos;s grow together and create a
            greener world, one plant at a time!
          </p>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => navigate("/products")}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
