import React, { useState, useEffect } from 'react';
import './Team.css'; // Import CSS file for animation
import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";

function TeamData() {
  const [selectedState, setSelectedState] = useState('');
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchTeams();
  }, [selectedState]);

  const fetchTeams = () => {
    if (!selectedState) return;

    setLoading(true);

    // Simulating fetch request with dummy data
    const dummyData = [
      {
        id: 1,
        profile_picture: 'base64-encoded-image-data',
        name: 'Team 1',
        category: 'Category 1',
        type: 'Type 1',
        about: 'About Team 1',
      },
      {
        id: 2,
        profile_picture: 'base64-encoded-image-data',
        name: 'Team 2',
        category: 'Category 2',
        type: 'Type 2',
        about: 'About Team 2',
      },
    ];

    // Simulating a delay to mimic network request
    setTimeout(() => {
      setTeams(dummyData);
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <div className="container">
        <div className="team-section text-center">
          <h2>Teams</h2>
          <select
            id="searchInput"
            name="category"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select Option</option>
            <option value="Country">Country</option>
            <option value="State">State</option>
            <option value="District">District</option>
            <option value="Region">Region</option>
            <option value="Area">Area</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>

      <div className="container mt-3">
        <table className="table table-striped" id="dataTable">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Category</th>
              <th scope="col">Type</th>
              <th scope="col">About</th>
              {/* Add more table headers as needed */}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center">
                  <ClipLoader color="#ffad00" loading={true} size={40} />
                </td>
              </tr>
            ) : teams.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No data available
                </td>
              </tr>
            ) : (
              teams.map((team) => (
                <tr key={team.id} className="table-row-fade-in">
                  <td>
                    <img
                      src={`data:image/png;base64,${team.profile_picture}`}
                      alt="Profile Picture"
                      style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                    />
                  </td>
                  <td>{team.name}</td>
                  <td>{team.category}</td>
                  <td>{team.type}</td>
                  <td>{team.about}</td>
                  {/* Populate additional cells if required */}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TeamData;
