import ReactDOM from "react-dom";
import classes from "./Model.module.css";

const Backrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Model = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        portalElement
      )}
    </>
  );
};

export default Model;
