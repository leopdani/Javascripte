let num = [5, 8, 2, 9, 3]

/*
num[5] = 1
num.push(8)//nn importa o local
num.length //olha a quantidade de elementos
num.sort() //sorteia os elementos em ordem crscente*/
num.push(1)
num.sort()
console.log(num)
console.log(`o vetor tem ${num.length} posiões`)
console.log(`o primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(5)
if (pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(`o valor 8 esta na posição ${pos}`)
}