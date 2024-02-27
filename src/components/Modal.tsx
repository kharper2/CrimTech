import { createPortal } from 'react-dom'

const modalRoot = document.getElementById('modal')

export default function Modal() {
  // access modal root element with
  // this is where the modal should be rendered and destroyed
  return (
    <>
      {
        // TODO: handle button click to change state
      }
      <button>Click Me!</button>

      {
        // TODO: conditionally show this based on open state
      }
      {createPortal(
        <div>
          {
            // TODO: style with the specifications given in the README
          }
        </div>,
        modalRoot as Element,
      )}
    </>
  )
}
