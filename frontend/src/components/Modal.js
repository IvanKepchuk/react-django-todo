import React, { Component } from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label
} from "reactstrap";


/*This code creates a Custommodel class and a modal component derived
 from the reactstrap library is nested in it*/

/*This code also defined three fields in the form:
  title
  description
  completed  
  
These are the same fields that we defined
as properties on the Todo model in the backend
  
  
Custom Model Gets ActiveItem, toggle and onSave as props:

1 - CustomModal : represents the Todo item to be edited
2 - tiggle is a function used to control the Modal’s state
3 - onSave is a function that is called to save the edited values of the Todo item


  */
export default class CustomModal extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeItem: this.props.activeItem,
      };
    }
  
    handleChange = (e) => {
      let { name, value } = e.target;
  
      if (e.target.type === "checkbox") {
        value = e.target.checked;
      }
  
      const activeItem = { ...this.state.activeItem, [name]: value };
  
      this.setState({ activeItem });
    };
  
    render() {
      const { toggle, onSave } = this.props;
  
      return (
        <Modal isOpen={true} toggle={toggle}>
          <ModalHeader toggle={toggle}>Todo Item</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="todo-title">Title</Label>
                <Input
                  type="text"
                  id="todo-title"
                  name="title"
                  value={this.state.activeItem.title}
                  onChange={this.handleChange}
                  placeholder="Enter Todo Title"
                />
              </FormGroup>
              <FormGroup>
                <Label for="todo-description">Description</Label>
                <Input
                  type="text"
                  id="todo-description"
                  name="description"
                  value={this.state.activeItem.description}
                  onChange={this.handleChange}
                  placeholder="Enter Todo description"
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="completed"
                    checked={this.state.activeItem.completed}
                    onChange={this.handleChange}
                  />
                  Completed
                </Label>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button
              color="success"
              onClick={() => onSave(this.state.activeItem)}
            >
              Save
            </Button>
          </ModalFooter>
        </Modal>
      );
    }
  }