import React from 'react';
import './App.css';
import axios from 'axios';
import { withFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function FormSub() {
  return (
    <div className="Form">
        <Form>
            initialValues={{name:'', password:''}}
        </Form>
     
    </div>
  );
}

export default Form;
