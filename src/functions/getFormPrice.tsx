export const setFormValues = (change: number) => {
  const quantity = Number(
    (document.getElementById("input_quantity") as HTMLInputElement).value
  );

  const newQuantity = quantity + change;

  if (newQuantity > 0 && newQuantity < 21) {
    (document.getElementById("input_quantity") as HTMLInputElement).value =
      newQuantity.toString();

    var newPrice = (newQuantity * 30).toString();
    console.log(newPrice);
  } else {
    return;
  }
  const form_price = document.getElementById("form_price")!;

  form_price.innerText = newPrice;
};
