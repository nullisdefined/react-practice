import React from "react";
import { Button, Modal } from 'react-bootstrap';

type Todo = {
  id: number;
  text: string;
  isChecked: boolean;
};

type TodoModalProps = {
  show: boolean;
  todo: Todo | null;
  handleClose: () => void;
};


const handleShow = () => {

};

const handleClose = () => {
  
};

const TodoModal: React.FC<TodoModalProps> = ({show, todo, handleClose}) => {
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>상세정보</Modal.Title>
        </Modal.Header>
        <Modal.Body>{todo?.text}</Modal.Body>
      </Modal>
    </>
  );
}

export default TodoModal;