/* eslint-disable react/prop-types */
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import "./job.css";
import { Link } from "react-router-dom";
const Job = ({ job }) => {
  const { id, image, title, company, position, description } = job;
  return (
    <div>
      <div className='card'>
        <div className='image-company'>
          <img src={image} alt='' />
          <p>{company}</p>
        </div>
        <h2>{title}</h2>
        <h3>
          <GiPositionMarker color='#f0555b' />
          {position}
        </h3>
        <p>{description}</p>

        <div className='button-container'>
          <button className='favorite-button'>
            <FaHeart className='icons favorite-icon' />
          </button>
          <button className='apply-button'>Apply Now</button>
          <button className='edit-button'>
            <FaEdit className='icons edit-icon' />
          </button>
          <button className='delete-button'>
            <FaTrash className='icons delete-icon' />
          </button>
        </div>
        <Link to={`/jobs/${id}`}>
          {" "}
          <button className='see_details'>See Details</button>
        </Link>
      </div>
    </div>
  );
};

export default Job;
