import React, { useState } from "react";

function RightSide() {
  const [aboutMe, setAboutMe] =
    useState(` Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, quod?
Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi,
ducimus!`);
  const [university1, setUniversity1] = useState(
    "University of Waterloo, Canada 2016"
  );
  const [university1Info, setUniversity1Info] = useState(
    "Master's degree in computer science"
  );
  const [university2, setUniversity2] = useState(
    "University of Manchester, UK 2011"
  );
  const [university2Info, setUniversity2Info] = useState(
    "Bachelor of Computer Science"
  );
  const [position1, setPosition1] = useState("Full Stack Developer");
  const [position2, setPosition2] = useState("Web Developer");
  const [duration1, setDuration1] = useState("2 years: 2021-2023");
  const [duration2, setDuration2] = useState("3 years: 2018-2021");
  const [responsibilities1, setResponsibilities1] = useState(
    "Developing, maintaining"
  );
  const [responsibilities2, setResponsibilities2] = useState("Developing");

  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = () => {
    setIsEditMode(false);
  };
  return (
    <div className="rightSide">
      {isEditMode ? (
        <button className="edit-button" onClick={handleSaveClick}>
          ✓
        </button>
      ) : (
        <button className="edit-button" onClick={handleEditClick}>
          Edit
        </button>
      )}
      <div className="aboutMe">
        <h2>About Me</h2>
        {isEditMode ? (
          <textarea
            type="text"
            value={aboutMe}
            onChange={(e) => {
              setAboutMe(e.target.value);
            }}
          />
        ) : (
          <span>{aboutMe}</span>
        )}
      </div>
      <hr />
      <div className="education">
        <h2>Education</h2>
        <ul>
          <li>
            {isEditMode ? (
              <>
                <input
                  type="text"
                  value={university1}
                  onChange={(e) => {
                    setUniversity1(e.target.value);
                  }}
                />
                <ul>
                  <li>
                    {" "}
                    <input
                      type="text"
                      value={university1Info}
                      onChange={(e) => {
                        setUniversity1Info(e.target.value);
                      }}
                    />
                  </li>
                </ul>
              </>
            ) : (
              <>
                <span className="bold">{university1}</span>
                <ul>
                  <li className="italic">{university1Info}</li>
                </ul>
              </>
            )}
          </li>
          <li>
            {isEditMode ? (
              <>
                <input
                  type="text"
                  value={university2}
                  onChange={(e) => {
                    setUniversity2(e.target.value);
                  }}
                />
                <ul>
                  <li>
                    {" "}
                    <input
                      type="text"
                      value={university2Info}
                      onChange={(e) => {
                        setUniversity2Info(e.target.value);
                      }}
                    />
                  </li>
                </ul>
              </>
            ) : (
              <>
                <span className="bold">{university2}</span>
                <ul>
                  <li className="italic">{university2Info}</li>
                </ul>
              </>
            )}
          </li>
        </ul>
      </div>
      <hr />
      <div className="workExperience">
        <h2>Work Experience</h2>

        <h3>Company 1</h3>
        <ul>
          <li>
            <span className="bold">Position: </span>
            {isEditMode ? (
              <input
                type="text"
                value={position1}
                onChange={(e) => {
                  setPosition1(e.target.value);
                }}
              />
            ) : (
              <span className="italic">{position1}</span>
            )}
          </li>
          <li>
            <span className="bold">Duration: </span>
            {isEditMode ? (
              <input
                type="text"
                value={duration1}
                onChange={(e) => {
                  setDuration1(e.target.value);
                }}
              />
            ) : (
              <span className="italic">{duration1}</span>
            )}
          </li>
          <li>
            <span className="bold">Responsibilities: </span>
            <ul>
              <li>
                {isEditMode ? (
                  <textarea
                    type="input"
                    className="responsibilites"
                    value={responsibilities1}
                    onChange={(e) => {
                      setResponsibilities1(e.target.value);
                    }}
                  />
                ) : (
                  <span className="italic">{responsibilities1}</span>
                )}
              </li>
            </ul>
          </li>
        </ul>
        <h3>Company 2</h3>
        <ul>
          <li>
            <span className="bold">Position: </span>
            {isEditMode ? (
              <input
                type="text"
                value={position2}
                onChange={(e) => {
                  setPosition2(e.target.value);
                }}
              />
            ) : (
              <span className="italic">{position2}</span>
            )}
          </li>
          <li>
            <span className="bold">Duration: </span>
            {isEditMode ? (
              <input
                type="text"
                value={duration2}
                onChange={(e) => {
                  setDuration2(e.target.value);
                }}
              />
            ) : (
              <span className="italic">{duration2}</span>
            )}
          </li>
          <li>
            <span className="bold">Responsibilities: </span>
            <ul>
              <li>
                {isEditMode ? (
                  <textarea
                    type="input"
                    className="responsibilites"
                    value={responsibilities2}
                    onChange={(e) => {
                      setResponsibilities2(e.target.value);
                    }}
                  />
                ) : (
                  <span className="italic">{responsibilities2}</span>
                )}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default RightSide;
