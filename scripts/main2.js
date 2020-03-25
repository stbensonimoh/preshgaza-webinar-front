document.addEventListener('DOMContentLoaded', e => {
  // Add the current year to the footer credit
  let date = new Date()
  const year = date.getFullYear()
  let yearContent = document.querySelector('#year')
  yearContent.innerHTML = year
})