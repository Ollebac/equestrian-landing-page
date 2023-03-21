export const navigatePrograms = () => {
  let menu_buttons = document.getElementsByClassName("programs_menu_item");
  let program_content = document.getElementsByClassName("program_content");

  for (let i = 0; i < menu_buttons.length; i++) {
    menu_buttons[i].addEventListener("click", () => {
      let current_button = document.getElementsByClassName(
        "programs_menu_active"
      );
      let current_program = document.getElementsByClassName(
        "program_content_active"
      );
      current_button[0].className = current_button[0].className.replace(
        " programs_menu_active",
        ""
      );
      current_program[0].className = current_program[0].className.replace(
        " program_content_active",
        ""
      );
      menu_buttons[i].className += " programs_menu_active";
      program_content[i].className += " program_content_active";
    });
  }
};
