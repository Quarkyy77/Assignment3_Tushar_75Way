import { toast } from "react-toastify";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { logout, selectAuth } from "../features/authSlice";
import { useNavigate } from "react-router-dom";
import HeaderAndSidebar from "../components/HeaderAndSideBar";

const Dashboard = () => {
  const { name } = useAppSelector(selectAuth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Logged Out Successfully");
    navigate("/auth");
  };

  return (
    <section className="vh-100 gradient-custom">
      <HeaderAndSidebar />
      <div className="container py-4 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className=" col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card bg-dark text-white"
              style={{ borderRadius: "1rem" }}>
              <div className="card-body p-4 text-center">
                <div className="mb-md-5 mt-md-4 pb-5">
                  <h2 className="fw-bold mb-2">Welcome {name}</h2>
                  <button
                    className="btn btn-outline-light btn-lg px-5 mt-3"
                    type="button"
                    onClick={() => handleLogout()}>
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
