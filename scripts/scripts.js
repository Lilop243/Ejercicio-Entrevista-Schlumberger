const formCalificacion = document.getElementById('formCalificacion')
const nota = document.getElementById('nota')
const resultado = document.getElementById('resultado')


// Evento de tipo submit donde se validan que la nota ingresada sea valida, sino lo es lanza una alerta
formCalificacion.addEventListener('submit', (e) => {
    e.preventDefault()
    if (nota.value < 0 || nota.value > 100) {
        Swal.fire({
            icon: 'error',
            title: 'Calificación no valida',
            showConfirmButton: false,
            timer: 1500,
          })
          nota.value=""
    }
    else {
        redondeo()
    }
})

// Funcion encargada de hacer el redondeo
const redondeo = () => {
    // Si la nota es menor a 38 la nota no se modificara
    if (nota.value < 38) {
        mostrarResultado(nota.value)
    }
    else {
        // Halla el multiplo de 5 mas cercano al numero dado
        const multiplo = Math.ceil(nota.value / 5) * 5
        // La diferencia entre el multiplo y la nota
        const diferecia = multiplo - nota.value
        // Si la diferencia es igual a 3, la nota no se modifica
        if (diferecia == 3) {
            mostrarResultado(nota.value)
        }
        // Si la diferencia es menor que 3, la nota es el multiplo de 5 mas cercano
        else if (diferecia < 3) {
            mostrarResultado(multiplo)
        }
        else {
            mostrarResultado(nota.value)
        }
    }
}

// Funcion encargada de mostrar el resultado en el DOM
const mostrarResultado = (nota) => {
    resultado.innerHTML = `
    <span> 📝 ${nota}</span>
    `
}