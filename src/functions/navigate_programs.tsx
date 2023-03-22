export const navigatePrograms = () => {
  let menu_buttons = document.getElementsByClassName("programs_menu_item");
  let program_mobile = document.getElementsByClassName("program_mobile");
  let program_desktop = document.getElementsByClassName("program_desktop");

  for (let i = 0; i < menu_buttons.length; i++) {
    menu_buttons[i].addEventListener("click", () => {
      let current_button = document.getElementsByClassName(
        "programs_menu_active"
      );
      let current_mobile = document.getElementsByClassName(
        "program_mobile_active"
      );
      let current_desktop = document.getElementsByClassName(
        "program_desktop_active"
      );
      current_button[0].className = current_button[0].className.replace(
        " programs_menu_active",
        ""
      );
      current_mobile[0].className = current_mobile[0].className.replace(
        " program_mobile_active",
        ""
      );
      current_desktop[0].className = current_desktop[0].className.replace(
        " program_desktop_active",
        ""
      );
      menu_buttons[i].className += " programs_menu_active";
      program_mobile[i].className += " program_mobile_active";
      program_desktop[i].className += " program_desktop_active";
    });
  }
};
