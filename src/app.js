/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = [
    "The dog",
    "my grama",
    "The mailman",
    "the eagle",
    "my driver"
  ];
  let subject = ["car", "horse", "phone", "book", "dog"];
  let action = ["walking", "calling", "jumping", "laring"];
  let possetion = ["my car", "my horse", "my phone", "my book"];
  let where = ["in my car", "in my horse", "in my phone"];
  //functionpara generar una excusa
  function generateExcuse() {
    let randomPronoun = Math.floor(Math.random() * pronoun.length);
    let randomSubject = Math.floor(Math.random() * subject.length);
    let randomAction = Math.floor(Math.random() * action.length);
    let randomPossetion = Math.floor(Math.random() * possetion.length);
    let randomWhere = Math.floor(Math.random() * where.length);
    let excuse =
      pronoun[randomPronoun] +
      " " +
      subject[randomSubject] +
      " " +
      action[randomAction] +
      " " +
      possetion[randomPossetion] +
      " " +
      where[randomWhere];
    return {
      text: excuse,
      pronoun: pronoun[randomPronoun]
    };
  }
  // funcion para obtener una imagen segun el "pronoun" seleccionado
  function getImage(pronoun) {
    let imageUrl = "";
    switch (pronoun) {
      case "The dog":
        imageUrl =
          "https://cdn.pixabay.com/photo/2024/08/05/21/19/lion-8947711_1280.jp";
        break;
      case "my grama":
        imageUrl =
          "https://cdn.pixabay.com/photo/2024/02/21/15/09/plant-8587893_1280.jpg";
        break;
      case "The mailman":
        imageUrl =
          "https://cdn.pixabay.com/photo/2024/08/01/15/57/woman-8937604_1280.png";
        break;
      case "the eagle":
        imageUrl =
          "https://cdn.pixabay.com/photo/2024/08/05/13/17/dog-8946829_1280.jpg";
        break;
      case "my driver":
        imageUrl =
          "https://cdn.pixabay.com/photo/2024/01/09/14/27/truck-8497705_1280.jpg";
        break;
      default:
        imageUrl =
          "https://cdn.pixabay.com/photo/2024/01/15/21/13/puppy-8510899_1280.jpg"; //Imagen por defecto
    }
    return imageUrl;
  }
  // Generar excusa y seleccionar imagen
  let generatedExcuse = generateExcuse();
  let excuseText = generatedExcuse.text;
  let excuseImage = getImage(generatedExcuse.pronoun);

  //Mostras la excusa en el HTML
  document.getElementById("excuse").innerHTML = excuseText;

  // Crear un elemento de imagen y agragarlo al HTML
  let imgElement = document.createElement("img");
  imgElement.src = excuseImage;
  imgElement.alt = generatedExcuse.pronoun;
  // para estar seguro que la imagen este en su propia linea
  imgElement.style.display = "block";

  // Agrgar la imagen al div de la excusa
  document.getElementById("excuse").appendChild(imgElement);
};
