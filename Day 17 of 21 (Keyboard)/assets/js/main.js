const box = document.querySelector('.box')
document.addEventListener('keydown', e => {
  let keyName = e.keyCode === 32 ? 'Space' : e.key
  box.querySelector('.key-code').innerText = e.keyCode
  box.querySelector('.key-name').innerText = keyName.toUpperCase()
  box.querySelector('.key span').innerText = keyName
  box.querySelector('.code span').innerText = e.keyCode
  box.classList.add('active')
})
