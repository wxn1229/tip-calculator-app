

//funcition block
function calculate() {
  isResetable = true
  console.log("caling")
  let tipAomunt = 0
  tipAomunt = billValue * tipPercent * 0.01 / num;
  let total = 0
  total = (billValue / num) + tipAomunt

  let Aomunt = document.querySelector("#tip-amount")
  let Total = document.querySelector("#total")

  Aomunt.innerText = tipAomunt.toFixed(2)
  Total.innerText = total.toFixed(2)





}







//main block
let num = 0;
let billValue = 0
let isResetable = false
let tipPercent = 5


let bill = document.querySelector("#bill")


bill.addEventListener("change", () => {
  billValue = parseFloat(bill.value)
  console.log("bill change")

  calculate()
})

let people = document.querySelector("#people")

people.addEventListener("change", () => {
  console.log("people change")
  num = parseInt(people.value)
  calculate()
})

let Default = document.querySelectorAll(".default")

Default.forEach(item => {
  item.addEventListener("click", () => {
    console.log(parseInt(item.childNodes[0].innerText))
    tipPercent = parseInt(item.childNodes[0].innerText)
    Default.forEach(item2 => {
      item2.style.color = "white"
      item2.style.backgroundColor = "hsl(193, 100%, 15%)"
    })
    item.style.color = "hsl(193, 100%, 15%)"
    item.style.backgroundColor = "hsl(173, 61%, 77%)"

    calculate()

  })
})

let custom = document.querySelector("#custom")

custom.addEventListener("change", () => {
  tipPercent = parseInt(custom.value)
  Default.forEach(item2 => {
    item2.style.color = "white"
    item2.style.backgroundColor = "hsl(193, 100%, 15%)"
  })

})
