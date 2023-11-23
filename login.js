const modal = document.querySelector(".login-box");
const modal1 = document.querySelector(".registration-box");

//   Modal open function
const openModal = () => {
  registrationformdeactive();  
  modal.classList.add("scaler");
};
const closeModal = () => {
    modal.classList.remove("scaler");
  };

const registrationformactive=()=>{
    modal.classList.remove("scaler");
    modal1.classList.add("scaler");
}
const registrationformdeactive=()=>{
    modal1.classList.remove("scaler");
    closeModal();
}
const alertlogin=()=>{
    alert("You have been logged in safely");
}
const alertregister=()=>{
    alert("You have been registered");
}