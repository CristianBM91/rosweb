function mover_manual(direccionMovimiento) {
    console.log("!Moviendo el robot hacia" + direccionMovimiento);
    
    // Ejemplo de solicitud HTTP con fetch() para mover el robot hacia adelante
    fetch(direccion.value + "/mover_manual", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({direccionDeMovimiento: direccionMovimiento})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log('Respuesta del servidor:', data);
        // Haz algo con los datos recibidos del servidor si es necesario
        
    })
    .catch(error => {
        console.error('Error al realizar la solicitud:', error);
    });
}