const collection = document.getElementsByTagName('div')
const list = document.querySelectorAll('div')

console.log('collection', collection)
console.log('list', list)

const newDiv = document.createElement('div')
document.body.append(newDiv)


console.log('collection', collection)
console.log('list', list)

// Array.from(collection).forEach((i, ind) => {
//   i.textContent = ind + 1;
//   i.style.cssText = 'color: blue; font-size: 14px'
// })

list.forEach((i, ind) => {
  i.textContent = ind + 1;
  i.style.cssText = 'color: blue; font-size: 14px'
})

console.log(document.body.childNodes)