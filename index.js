

//funcition block
function calculate() {
  if (!isResetable) {
    reset.style.opacity = "1"
    reset.style.cursor = "pointer"

    isResetable = true
  }
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
let tipPercent = 100


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

let reset = document.querySelector(".reset")

reset.style.opacity = "0.4"
reset.style.cursor = "default"

reset.addEventListener("click", () => {
  if (isResetable) {
    billValue = 0
    num = 0
    tipPercent = 100

    bill.value = ""
    Default.forEach(item => {
      item.style.color = "white"
      item.style.backgroundColor = "hsl(193, 100%, 15%)"
    })
    custom.value = ""
    people.value = ""
    reset.style.opacity = "0.4"
    reset.style.cursor = "default"


    isResetable = false
  }
})



