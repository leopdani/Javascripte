let amigo = {nome:'leo', 
sexo: 'm', 
peso: 85.3,
engordar(p=0){
    console.log(amigo.nome)
    this.peso += p

}}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)