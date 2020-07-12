import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import "./blogForm.css";

export default function BlogForm(props) {
  return (
    <div className="form-wrapper">
      <Form>
        <FormGroup>
          <Label>Title</Label>
          <Input
            value={props.title}
            onChange={(e) => {
              props.updateTitle(e.target.value);
            }}
          />
        </FormGroup>
        <FormGroup>
          <Label>Body</Label>
          <Input
            type="textarea"
            value={props.body}
            onChange={(e) => {
              props.updateBody(e.target.value);
            }}
          />
        </FormGroup>
        <Button color="primary" onClick={props.handleData}>
          Test
        </Button>
      </Form>
    </div>
  );
}
