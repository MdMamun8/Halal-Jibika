import axios from "axios";
import { useState } from "react";
import { useNavigate, useParams, useRouteLoaderData } from "react-router-dom";
import "./UpdateData.css";
const UpdateData = () => {
  const id = +useParams().editJobs;
  const jobs = useRouteLoaderData("root").data;
  const navigate = useNavigate();
  const [formData, setFormData] = useState(jobs.find((job) => job.id === id));
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const postJobs = await axios.put(
      `http://localhost:9000/jobs/${id}`,
      formData
    );
    console.log(postJobs);
    navigate("/jobs");
    setFormData({
      title: "",
      logo: "",
      companyName: "",
      position: "",
      description: "",
    });
  };
  return (
    <div className='updated-data'>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Title:
          <input
            type='text'
            name='logo'
            value={formData.logo}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Company Name:
          <input
            type='text'
            name='companyName'
            value={formData.companyName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Position:
          <input
            type='text'
            name='position'
            value={formData.position}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name='description'
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />

        <button type='submit'>Post Data</button>
      </form>
    </div>
  );
};

export default UpdateData;