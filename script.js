function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  //}
  html.classList.toggle("light")

  //Pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito, usando óculos de sol e jaqueta preta com fundo azul e roxo"
    )
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito, usando óculos e camiseta preta com fundo laranja"
    )
  }
}
