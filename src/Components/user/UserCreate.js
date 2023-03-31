import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const formValidationSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required().min(4),
  email: yup.string().required(),
  im: yup.string().required(),
  position: yup.string().required(),
  country: yup.string().required(),
});

function UserCreate({ data, setData }) {
  const navigate = useNavigate();

  const myFormik = useFormik({
    initialValues: {
      id: "",
      name: "",
      email: "",
      im: "",
      position: "",
      country: "IN",
    },
    validationSchema: formValidationSchema,
    onSubmit: (values) => {
      console.log("form values", values);
      setData([...data, values]);
      navigate("/portal/userlist");
    },
  });

  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3 d-sm-flex  justify-content-between mb-4">
          <h6 className="m-0 font-weight-bold text-primary">User Form</h6>
        </div>
        <div className="card-body">
          <form class="row g-3" onSubmit={myFormik.handleSubmit}>
            <div class="col-md-12">
              <div className="col-md-3">
                <label for="id" class="form-label">
                  Id
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    myFormik.touched.id && myFormik.errors.id
                      ? "is-invalid"
                      : "is-valid"
                  }`}
                  value={myFormik.values.id}
                  onChange={myFormik.handleChange}
                  id="id"
                />
                <span style={{ color: "red", fontSize: ".5" }}>
                  {myFormik.touched.id && myFormik.errors.id
                    ? myFormik.errors.id
                    : null}
                </span>
                <br />
              </div>
            </div>
            <div class="col-md-6">
              <label for="name" class="form-label">
                Name
              </label>
              <input
                type="text"
                className={`form-control ${
                  myFormik.touched.name && myFormik.errors.name
                    ? "is-invalid"
                    : "is-valid"
                }`}
                value={myFormik.values.name}
                onChange={myFormik.handleChange}
                id="name"
              />
              <span style={{ color: "red", fontSize: ".5" }}>
                {myFormik.touched.name && myFormik.errors.name
                  ? myFormik.errors.name
                  : null}
              </span>
              <br />
            </div>
            <div class="col-md-6">
              <label for="email" class="form-label">
                Email
              </label>
              <input
                type="email"
                className={`form-control ${
                  myFormik.touched.email && myFormik.errors.email
                    ? "is-invalid"
                    : "is-valid"
                }`}
                value={myFormik.values.email}
                onChange={myFormik.handleChange}
                id="email"
              />
              <span style={{ color: "red", fontSize: ".5" }}>
                {myFormik.touched.email && myFormik.errors.email
                  ? myFormik.errors.email
                  : null}
              </span>
              <br />
            </div>
            <div class="col-md-4">
              <label for="text" class="form-label" id="im">
                I'm
              </label>
              <select
                id="im"
                className={`form-control ${
                  myFormik.touched.im && myFormik.errors.im
                    ? "is-invalid"
                    : "is-valid"
                }`}
                value={myFormik.values.im}
                onChange={myFormik.handleChange}
              >
                <option>---SELECT---</option>
                <option>Student</option>
                <option>Working Profession</option>
              </select>
              <span style={{ color: "red", fontSize: ".5" }}>
                {myFormik.touched.im && myFormik.errors.im
                  ? myFormik.errors.im
                  : null}
              </span>
              <br />
            </div>
            <div class="col-md-4">
              <label for="text" class="form-label" id="position">
                Position
              </label>
              <select
                id="position"
                className={`form-control ${
                  myFormik.touched.position && myFormik.errors.position
                    ? "is-invalid"
                    : "is-valid"
                }`}
                value={myFormik.values.position}
                onChange={myFormik.handleChange}
              >
                <option>---SELECT---</option>
                <option value={"D-FSD"}>Doing FSD</option>
                <option value={"FSD"}>Full Stack Developer</option>
                <option value={"SA"}>System Architect</option>
                <option value={"DA"}>Data Analyst</option>
                <option value={"JD"}>Java Developer</option>
              </select>
              <span style={{ color: "red", fontSize: ".5" }}>
                {myFormik.touched.position && myFormik.errors.position
                  ? myFormik.errors.position
                  : null}
              </span>
              <br />
            </div>
            <div class="col-4">
              <label for="country" class="form-label" id="country">
                Country
              </label>
              <select
                name="country"
                className={`form-control ${
                  myFormik.touched.country && myFormik.errors.country
                    ? "is-invalid"
                    : "is-valid"
                }`}
                value={myFormik.values.country}
                onChange={myFormik.handleChange}
              >
                <option value={"IN"}>India</option>
                <option value={"CA"}>Canada</option>
                <option value={"USA"}>USA</option>
              </select>
              <span style={{ color: "red", fontSize: ".5" }}>
                {myFormik.touched.country && myFormik.errors.country
                  ? myFormik.errors.country
                  : null}
              </span>
              <br />
            </div>
            <div class="col-12">
              <button type="submit" class="btn btn-primary mt-4">
                Create
              </button>
            </div>
            {/* {JSON.stringify(myFormik.values)} */}
          </form>
        </div>
      </div>
    </>
  );
}

export default UserCreate;
