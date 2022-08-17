/*Crie um algoritmo que transforme as notas do sistema escolar numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A;
* entre 80 e 89 - B;
* entre 70 e 79 - C;
* entre 60 e 69 - D;
* menor que 60 - F;
*/

const form = document.querySelector('form')

const calculateScore = inputValue => {
  const scoreA = inputValue <= 100 && inputValue >= 90
  const scoreB = inputValue <= 89 && inputValue >= 80
  const scoreC = inputValue <= 79 && inputValue >= 70
  const scoreD = inputValue <= 69 && inputValue >= 60
  const scoreF = inputValue <= 59 && inputValue >= 0

  if (scoreA) return 'A'
  if (scoreB) return 'B'
  if (scoreC) return 'C'
  if (scoreD) return 'D'
  if (scoreF) return 'F'

  return 'Inválida'
}

const clearGradeBox = gradeBox => {
  form.addEventListener('click', () => {
    gradeBox.textContent = ''
  })
}

const createGradeBox = finalScore => {
  const gradeBox = document.createElement('div')
  gradeBox.setAttribute('class', 'grade')
  gradeBox.setAttribute('style', 'color: grey; font-size: 3rem')

  form.insertAdjacentElement('afterend', gradeBox)
  gradeBox.textContent = `Nota ${finalScore}`

  clearGradeBox(gradeBox)
}

form.addEventListener('submit', event => {
  event.preventDefault()

  const inputValue = event.target.send.value
  console.log(inputValue)

  const finalScore = calculateScore(inputValue)

  event.target.reset()

  createGradeBox(finalScore)
})
