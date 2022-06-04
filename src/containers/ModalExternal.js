import React from 'react'
import { Button, Modal } from "react-bootstrap";

export const ModalExternal = (show,hide) => {
  return (
    <Modal show={show} onHide={hide}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={hide}>
        Close
      </Button>
      <Button variant="primary" onClick={hide}>
        Save Changes
      </Button>
    </Modal.Footer>
  </Modal>
  )
}
