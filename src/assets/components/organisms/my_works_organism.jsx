import WorkMolecule from "../molecules/work_molecule";
import "../../styles/work_molecule.css";
function MyWorksOrganism() {
  return (
    <div style={{ marginTop: "100px", marginBottom: "30px" }}>
      {/* <div className="responsive"> */}
      <div
        className="responsive"
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          rowGap: "40px",
          columnGap: "0px",
          width: "50%",
          alignItems: "center",
          justifyItems: "center",
          margin: "0 auto",
        }}
      >
        <WorkMolecule
          description={"Description"}
          img={""}
          technologies={"react, css, laravel"}
          title={"titulo"}
          url={""}
        />
        <WorkMolecule
          description={"Description"}
          img={""}
          technologies={"react, css, laravel"}
          title={"titulo"}
          url={""}
        />
        <WorkMolecule
          description={"Description"}
          img={""}
          technologies={"react, css, laravel"}
          title={"titulo"}
          url={""}
        />
        <WorkMolecule
          description={"Description"}
          img={""}
          technologies={"react, css, laravel"}
          title={"titulo"}
          url={""}
        />
        <WorkMolecule
          description={"Description"}
          img={""}
          technologies={"react, css, laravel"}
          title={"titulo"}
          url={""}
        />
      </div>
    </div>
  );
}

export default MyWorksOrganism;
