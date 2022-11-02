import { useId } from "react";

function InputForm(props) {
  const id = useId();
  // console.log(id);
  return (
    <div className="inputForm">
      <label htmlFor={"First Name -" + id}>{props.label.firstName}</label>
      <input id={"First Name -" + id} type={props.type} />

      <label htmlFor={"Last Name -" + id}>{props.label.lastName}</label>
      <input id={"Last Name -" + id} type={props.type} />

      <label htmlFor={"Email -" + id}>{props.label.email}</label>
      <input id={"Email -" + id} type={props.type} />
    </div>
  );
}

export default InputForm;
