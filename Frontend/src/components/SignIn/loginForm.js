import { useState, useEffect } from "react";
import { useHistory } from "react-router";
import axios from "axios";

const useForm = (validate) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  // const [userlist, setuserlist] = useState([]);

  var history = useHistory();
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [userlist, setuserlist] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      // callback()
      localStorage.setItem("userName", values.email);
      axios.post("http://localhost:3001/user/getmailid", {
        emailId: values.email,
      });
      axios.get("http://localhost:3001/user/read").then((response) => {
        // setfoodlist(response);
        console.log(response);
        setuserlist(response.data);
        userlist.map((val, key) => {
          console.log(val.emailId);
          if (val.emailId === values.email) {
            console.log(val.password + "  --- " + values.password);
            if (val.password == values.password) {
              // window.alert("login sucessful");
              history.push("/main");
            } else {
              window.alert("invalid password");
            }
          }
        });
      });
    }
  }, [errors]);
  return { handleChange, values, handleSubmit, errors };
};
export default useForm;
