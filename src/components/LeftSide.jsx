import React, { useState } from "react";

function LeftSide() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [gender, setGender] = useState("Male");
  const [birth, setBirth] = useState("01-01-2001");
  const [mail, setMail] = useState("john@gmail.com");
  const [location, setLocation] = useState("London");
  const [skills1, setSkills1] = useState("Programming");
  const [skills2, setSkills2] = useState("Methodologies");
  const [skills3, setSkills3] = useState("");
  const [skills4, setSkills4] = useState("");
  const [softSkills1, setSoftSkills1] = useState("Comminication");
  const [softSkills2, setSoftSkills2] = useState("Problem Solving");

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  return (
    <div className="leftSide">
      <div className="info-list">
        <div className="info-item">
          {isEditMode ? (
            <input
              type="text"
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
            />
          ) : (
            <span>{gender}</span>
          )}
          {isEditMode ? (
            <button className="edit-button" onClick={handleSaveClick}>
              ✓
            </button>
          ) : (
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
          )}
        </div>
        <div className="info-item">
          {isEditMode ? (
            <input
              type="text"
              value={birth}
              onChange={(e) => {
                setBirth(e.target.value);
              }}
            />
          ) : (
            <span>{birth}</span>
          )}
        </div>
        <div className="info-item">
          {isEditMode ? (
            <input
              type="text"
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
            />
          ) : (
            <span>{mail}</span>
          )}
        </div>
        <div className="info-item">
          {isEditMode ? (
            <input
              type="text"
              value={location}
              onChange={(e) => {
                setLocation(e.target.value);
              }}
            />
          ) : (
            <span>{location}</span>
          )}
        </div>
        <hr />
        <div className="hard-skills">
          <h2>Hard Skills</h2>
          {isEditMode ? (
            <input
              type="text"
              value={skills1}
              onChange={(e) => {
                setSkills1(e.target.value);
              }}
            />
          ) : (
            <span>{skills1}</span>
          )}
          <br />
          {isEditMode ? (
            <input
              type="text"
              value={skills2}
              onChange={(e) => {
                setSkills2(e.target.value);
              }}
            />
          ) : (
            <span>{skills2}</span>
          )}
          <br />
          {isEditMode ? (
            <input
              type="text"
              value={skills3}
              onChange={(e) => {
                setSkills3(e.target.value);
              }}
            />
          ) : (
            <span>{skills3}</span>
          )}
          <br />{" "}
          {isEditMode ? (
            <input
              type="text"
              value={skills4}
              onChange={(e) => {
                setSkills4(e.target.value);
              }}
            />
          ) : (
            <span>{skills4}</span>
          )}
        </div>
        <hr />
        <div className="soft-skills">
          <h2>Soft-Skills</h2>
          {isEditMode ? (
            <input
              type="text"
              value={softSkills1}
              onChange={(e) => {
                setSoftSkills1(e.target.value);
              }}
            />
          ) : (
            <span>{softSkills1}</span>
          )}
          <br />
          {isEditMode ? (
            <input
              type="text"
              value={softSkills2}
              onChange={(e) => {
                setSoftSkills2(e.target.value);
              }}
            />
          ) : (
            <span>{softSkills2}</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default LeftSide;
