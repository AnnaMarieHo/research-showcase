import { motion as m } from "framer-motion";

const GeneInfoComponent = ({ data, onClose }) => {
  if (!data) return null;
  return (
    <m.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      style={{
        color: "black",
        width: 400,
        height: 400,
        border: "solid 1px gray",
        textAlign: "center",
        borderRadius: "7px",
        margin: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        flexDirection: "column",
        boxShadow: "0px 10px 15px 0px rgba(39, 39, 39, 0.15)",
      }}
    >
      {/* Apply the onClose handler to this button */}
      <button className="threshold-submit-button" onClick={onClose}>
        Close
      </button>

      <p style={{ margin: "20px" }}>Gene Name: {data.geneName}</p>
      <p>Gene ID: {data.geneId}</p>
      <p>Gene Biotype: {data.geneBiotype}</p>
      <p>Gene Description: {data.geneDescription}</p>

      {/* <p style={{ marginTop: "70px", marginBottom: "80px" }}>
        More Details to Come.
      </p> */}
    </m.div>
  );
};
export default GeneInfoComponent;
