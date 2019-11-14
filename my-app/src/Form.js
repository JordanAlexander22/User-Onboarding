import React from 'react';
import './App.css';
import axios from 'axios';
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormSub() {
  return (
    <div className="Form">
        <Form>
            <label>
                Name 
                <Field type="text" name="name" placeholder="enter your name" />
            </label>
        </Form>
     
    </div>
  );
}

export default Form;
