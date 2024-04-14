function connect(){
    console.log("Clic en connect");
    console.log("La dirección es: " + direccion.value);
    
    fetch(direccion.value + "/conectar")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Haz algo con los datos recibidos del servidor si es necesario
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        });
}

function disconnect(){
    console.log('Clic en botón de desconexión');
    
    fetch(direccion.value + "/desconectar")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Respuesta del servidor:', data);
            // Haz algo con los datos recibidos del servidor si es necesario
        })
        .catch(error => {
            console.error('Error al realizar la solicitud:', error);
        });
}    

