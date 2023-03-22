import { isPossiblePhoneNumber } from "react-phone-number-input";

export const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
  const phone = (
    document.getElementById("form_input_phone")! as HTMLInputElement
  ).value;

  if (!isPossiblePhoneNumber(phone)) {
    e.preventDefault();
    alert("Please enter a valid phone number");
    return false;
  }

  const myName = (
    document.getElementById("form_input_name") as HTMLInputElement
  ).value;
  const email = (
    document.getElementById("form_input_email")! as HTMLInputElement
  ).value;
  const program = (
    document.getElementById("form_input_program")! as HTMLInputElement
  ).value;
  const quantity = (
    document.getElementById("form_input_quantity")! as HTMLInputElement
  ).value;
  const date = (document.getElementById("form_input_date")! as HTMLInputElement)
    .value;
  const price = document.getElementById("form_input_price")!.innerText;

  alert(`The following info has been submitted:
    Name: ${myName}
    Email: ${email}

    Selected Program: ${program}
    Number of Participants: ${quantity}
    Date Selected: ${date}

    Total Price: ${price}
  `);
};
