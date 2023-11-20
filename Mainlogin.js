class Mainlogin {}
Mainlogin.main = (args) => {
  let userandPasswords = new UserandPassword();
  let bakerywindow = new loginwindow(userandPasswords.getBakerylogin());
};
