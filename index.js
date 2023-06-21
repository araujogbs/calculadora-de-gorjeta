function formatMoney(value){
    value = Math.ceil(value * 100) / 100
    value = value.toFixed(2)
    return '$' + value
}

function formatSplit(value){
    if(value != 1){
        return value + ' People'
    }
    else{
        return value + ' Person'
    }
}


function update(){
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let splitValue = document.getElementById('splitInput').value
    
    let tipValue = bill * (tipPercent / 100)
    let billTotal = tipValue + bill
    let billEach = billTotal / splitValue

    console.log()


    document.getElementById('tipPercent').innerHTML = `${tipPercent}%`
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = formatSplit(splitValue)
    document.getElementById('billEach').innerHTML = formatMoney(billEach)
}