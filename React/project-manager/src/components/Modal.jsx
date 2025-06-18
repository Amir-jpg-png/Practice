import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = forwardRef((props, ref) => {

    const dialogRef = useRef();

    useImperativeHandle(ref, () => ({
        open: () => {
            dialogRef.current.showModal()
        }
    }))


    return createPortal(
        <dialog ref={dialogRef} className="pt-4 px-4 rounded-md">
            {props.children}
            <form method="dialog" className="flex justify-end">
                <Button>
                    Okay
                </Button>
            </form>
        </dialog>, document.getElementById('modal-root')
    )
})

export default Modal;