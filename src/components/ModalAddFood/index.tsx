import { useRef } from "react";

import { FormHandles } from "@unform/core";
import { FiCheckSquare } from "react-icons/fi";

import Modal from "../Modal/index";
import Input from "../Input";

import { FoodType } from "../../@types/FoodType";

import { Form } from "./styles";

export interface IModalAddFood {
  handleAddFood: (food: FoodType) => void;
  setIsOpen: () => void;
  isOpen: boolean;
}

export default function ModalAddFood({
  handleAddFood,
  setIsOpen,
  isOpen,
}: IModalAddFood) {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit(data: FoodType) {
    handleAddFood(data);
    setIsOpen();
  }

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <h1>Novo Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />
        <button type="submit" data-testid="add-food-button">
          <p className="text">Adicionar Prato</p>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
