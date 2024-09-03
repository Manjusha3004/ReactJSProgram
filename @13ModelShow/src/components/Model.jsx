import { useEffect } from "react";

const Modal = ({ handleClose }) => {

    useEffect(() => {
        function onkeyDown(event) {
            if(event.keyCode === 27) {
                handleClose();
            }
        }
        document.addEventListener("keydown", onkeyDown);

        return () => {
            document.removeEventListener("keydown", onkeyDown);
        };
    });
    return (
        <div id="modalBackdrop" className="modalBackdrop">
            <div id="modalContent" className="modalContent" >
            <div id="modalHeader" className="modalHeaddr">
            <span className="modelTitle">Model Demo</span>
            <span className="closeButton" onClick={handleClose}>X</span>
        </div>  
        <span>
        sdfsfsdfsdfsdfsdfdsfsdsdfsfsdfsdfsdfds
        sdfsfsdfsdfsdfsdfdsfsdsdfsfsdfsdfsdfdssfdsf
        dsfdssdfsfsdfsdfsdfsdfdsfsdsdfsfsdfsdfsdfdsdsfds
        fdsfdfsdfdsdfsfsfsfsdfsdfsdfsfdsffds

        </span>  

        </div>       
        </div>
    )
}
export default Modal;