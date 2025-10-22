import "../../styles/work_molecule.css";
function WorkMolecule({ url, title, img, description, technologies }) {
  const listColors = [
    "#6b1010ff",
    "#1c721cff",
    "#0000FF",
    "#bbbb1cff",
    "#a81ba8ff",
    "#188989ff",
    "#a17017ff",
    "#800080",
    "#000000",
  ];
  const color1 = listColors[Math.floor(Math.random() * listColors.length)];
  const color2 = listColors[Math.floor(Math.random() * listColors.length)];
  return (
    <div
      className="responsive-item"
      style={{
        zIndex: "10",
        backgroundColor: "#ffffffff",
        borderRadius: "30px 30px 30px 30px",
        width: "300px",
        height: "350px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        border: "5px solid white",
        boxShadow: `${color1} 15px 10px 25px -15px, ${color2} 0px 10px 10px -15px`,
      }}
    >
      <div
        style={{
          height: "60%",
          borderRadius: "30px 30px 0 100px",
          position: "relative",
        }}
      >
        <img
          src={
            img !== ""
              ? img
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9A8qtIxlXJD7py4cZ_i52ajEudsmddBvHGA&s"
          }
          alt=""
          style={{
            objectFit: "fill",
            width: "100%",
            height: "100%",
            borderRadius: "30px 30px 150px 15px",
          }}
        />
        <p
          style={{
            color: "white",
            position: "absolute",
            left: "40%",
            top: "10px",
            zIndex: "1",
            backgroundColor: "#00000048",
            padding: "5px 10px",
            borderRadius: "5px",
            fontSize: "15px",
            blur: "5px",
          }}
        >
          {title}
        </p>
      </div>

      <div
        style={{
          color: "black",
          textAlign: "center",
        }}
      >
        <p>{description}</p>
        <p>{technologies}</p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "5px",
        }}
      >
        <button
          style={{
            background: `linear-gradient(to right, ${color1} 0%, ${color2} 100%)`,
            color: "white",
            width: "90%",
            border: "none",
            padding: "10px",
            borderRadius: "30px 30px",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            boxShadow: `${color1} 0px 5px 25px -15px, ${color2} 0px 5px 10px -5px`,
          }}
          type="button"
          onClick={() => window.open(url, "_blank")}
        >
          Ir al proyecto
        </button>
      </div>
    </div>
  );
}

export default WorkMolecule;
