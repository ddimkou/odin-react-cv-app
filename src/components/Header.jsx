import React, { useState } from "react";

function Header() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [name, setName] = useState("John Doe");
  const [profession, setProfession] = useState("Software Developer");
  const [image, setImage] = useState(null);
  const [showEditButton, setShowEditButton] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(true);
  };
  const handleSaveClick = () => {
    setIsEditMode(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  return (
    <div className="header">
      <div className="person">
        {isEditMode ? (
          <>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              type="text"
              value={profession}
              onChange={(e) => {
                setProfession(e.target.value);
              }}
            />
            <button className="edit-button" onClick={handleSaveClick}>
              ✓
            </button>
          </>
        ) : (
          <>
            <h1>{name}</h1>
            <h2>{profession}</h2>
            <button className="edit-button" onClick={handleEditClick}>
              Edit
            </button>
          </>
        )}
      </div>
      <div
        className="image-container"
        onMouseEnter={() => setShowEditButton(true)}
        onMouseLeave={() => setShowEditButton(false)}
      >
        <img
          src={
            image
              ? image
              : "https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg"
          }
          alt=""
        />
        {showEditButton && (
          <>
            <label htmlFor="upload-button" className="upload-btn">
              Upload
            </label>
            <input
              type="file"
              id="upload-button"
              onChange={handleImageUpload}
            />
          </>
        )}
      </div>
    </div>
  );
}

export default Header;

// import React, { useState } from "react";

// function Header() {
//   const [isEditMode, setIsEditMode] = useState(false);
//   const [name, setName] = useState("John Doe");
//   const [profession, setProfession] = useState("Software Developer");
//   const [image, setImage] = useState(null);

//   const handleEditClick = () => {
//     setIsEditMode(true);
//   };
//   const handleSaveClick = () => {
//     setIsEditMode(false);
//   };
//   return (
//     <div className="header">
//       <div className="person">
//         {isEditMode ? (
//           <>
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => {
//                 setName(e.target.value);
//               }}
//             />
//             <input
//               type="text"
//               value={profession}
//               onChange={(e) => {
//                 setProfession(e.target.value);
//               }}
//             />
//             <button className="edit-button" onClick={handleSaveClick}>
//               ✓
//             </button>
//           </>
//         ) : (
//           <>
//             <h1>{name}</h1>
//             <h2>{profession}</h2>
//             <button className="edit-button" onClick={handleEditClick}>
//               Edit
//             </button>
//           </>
//         )}
//       </div>
//       <img
//         src="https://static.generated.photos/vue-static/face-generator/landing/wall/14.jpg"
//         alt=""
//       />
//     </div>
//   );
// }

// export default Header;
