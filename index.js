const aceitar = true;

const promessa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (aceitar) {
            return resolve('Pedido aceito!')
        }

        return reject('Pedido Recusado!')
    },1000)
})

console.log('Aguardando!')

promessa
    .then(resolve => console.log(resolve))
    .catch(reject => console.log(reject))
    .finally(() => console.log('Finalizado!'))