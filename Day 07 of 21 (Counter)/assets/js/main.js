const input = document.querySelector('#date')

// Default value on input
const date = new Date()
const getDay = () => {
  return date.getDate().toString().padStart(2, '0')
}
const getMonth = () => {
  return (date.getMonth() + 1).toString().padStart(2, '0')
}
const getYear = () => {
  return date.getFullYear()
}
const defaultValueOnInput = () => {
  input.value = `${getYear()}-${getMonth()}-${getDay()}`
}
defaultValueOnInput()

var myInterval

const start = () => {
  let inputDate = input.value
  let targetDate = new Date(inputDate).getTime()
  let date = new Date()
  let currentDate = new Date(date.valueOf() - date.getTimezoneOffset() * 60000)
  reboot = false
  if (targetDate < currentDate) {
    alert('Favor informar uma data superior a atual')
    defaultValueOnInput()
  } else {
    myInterval = setInterval(() => {
      targetDate = new Date(inputDate).getTime()
      date = new Date()
      currentDate = new Date(date.valueOf() - date.getTimezoneOffset() * 60000)

      let secondsDif = (targetDate - currentDate) / 1000

      days = parseInt(secondsDif / 86400)
      secondsDif = secondsDif % 86400

      hours = parseInt(secondsDif / 3600)
      secondsDif = secondsDif % 3600

      minutes = parseInt(secondsDif / 60)
      seconds = (secondsDif % 60).toFixed(0)

      days = document.getElementById('days').innerHTML = days
      hours = document.getElementById('hours').innerHTML = hours
      minutes = document.getElementById('minutes').innerHTML = minutes
      seconds = document.getElementById('seconds').innerHTML = seconds
    })
    document.querySelector('.contador').style.display = 'flex'
    document.querySelector('.home').style.display = 'none'
  }
}

const back = () => {
  clearInterval(myInterval)
  console.log(reboot)
  document.querySelector('.contador').style.display = 'none'
  document.querySelector('.home').style.display = 'flex'
}
