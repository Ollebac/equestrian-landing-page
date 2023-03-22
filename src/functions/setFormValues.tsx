export const setFormValues = (change: number) => {
  const quantity = Number(
    (document.getElementById("form_input_quantity") as HTMLInputElement).value
  );

  const program = (
    document.getElementById("form_input_program") as HTMLInputElement
  ).value;
  var programPrice = 0;
  switch (program) {
    case "select":
      programPrice = 0;
      break;
    case "jumping":
      programPrice = 30;
      break;
    case "dressage":
      programPrice = 40;
      break;
    case "horse rides":
      programPrice = 20;
      break;
    case "photoshoot":
      programPrice = 25;
      break;
  }

  console.log(programPrice);
  const newQuantity = quantity + change;

  if (newQuantity > 0 && newQuantity < 21) {
    (document.getElementById("form_input_quantity") as HTMLInputElement).value =
      newQuantity.toString();

    var newPrice = (newQuantity * programPrice).toString();
    console.log(newPrice);
  } else {
    return;
  }
  const form_price = document.getElementById("form_input_price")!;

  form_price.innerText = newPrice;
};
