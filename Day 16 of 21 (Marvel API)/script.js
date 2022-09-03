const hash = 'ce707ceda2af14d2fec01170daddb6f8'
const timeStamp = '1662129130'
const apiKey = 'f9a2e06fdf062b1e59a9c970ded738c2'

const requestURL = `https://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${hash}`

fetch(requestURL)
  .then(response => {
    return response.json()
  })
  .then(data => {
    const person = document.querySelector('#personagem')

    data.data.results.forEach(element => {
      const txtName = element.name
      const sourceImg =
        element.thumbnail.path + '.' + element.thumbnail.extension

      createElement(txtName, sourceImg, person)
    })
  })

function createElement(name, sourceImg, div) {
  const txtName = document.createElement('h1')
  const image = document.createElement('img')
  const childDiv = document.createElement('div')
  const fatherDiv = document.createElement('div')

  image.src = sourceImg
  txtName.textContent = name

  childDiv.appendChild(image)
  childDiv.appendChild(txtName)

  fatherDiv.appendChild(childDiv)

  div.appendChild(fatherDiv)

  childDiv.classList.add('child')
  fatherDiv.classList.add('father')
}
