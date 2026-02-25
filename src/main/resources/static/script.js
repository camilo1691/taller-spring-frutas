
        // --- 1. Función para enviar datos (POST) ---
        async function enviarDatos() {
            const mensajeElemento = document.getElementById('mensaje');
            const nombreFruta = document.getElementById('nombre').value;
            const ciudadFruta = document.getElementById('ciudad').value;

            const datos = {
                nombre: nombreFruta,
                ciudad: ciudadFruta
            };

            try {
                // Ajustamos la ruta a /api/frutas para que coincida con las demás
                const respuesta = await fetch('/frutas', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(datos)
                });

                if (respuesta.ok) {
                    mensajeElemento.style.color = "green";
                    mensajeElemento.innerText = "¡Fruta guardada con éxito! 🎉";
                    document.getElementById('nombre').value = '';
                    document.getElementById('ciudad').value = '';
                    cargarFrutas(); // Refrescamos la lista automáticamente
                } else {
                    mensajeElemento.style.color = "red";
                    mensajeElemento.innerText = "Error: Revisa las validaciones. ❌";
                }
            } catch (error) {
                mensajeElemento.style.color = "red";
                mensajeElemento.innerText = "Error de conexión. 🔌";
            }
        }

        // --- 2. Función para listar datos (GET) ---
        async function cargarFrutas() {
            try {
                const respuesta = await fetch('/frutas');
                const frutas = await respuesta.json();
                const cuerpoTabla = document.getElementById('tabla-frutas');
                
                cuerpoTabla.innerHTML = '';

                frutas.forEach(fruta => {
                    cuerpoTabla.innerHTML += `
                        <tr>
                            <td>${fruta.id}</td>
                            <td>${fruta.nombre}</td>
                            <td>${fruta.ciudad}</td>
                            <td>
                                <button onclick="eliminarFruta(${fruta.id})" style="background-color: #e74c3c; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer;">
                                    Eliminar 🗑️
                                </button>
                            </td>
                        </tr>
                    `;
                });
            } catch (error) {
                console.error("Error al cargar frutas:", error);
            }
        }

        // --- 3. Función para borrar (DELETE) ---
        async function eliminarFruta(id) {
            if (confirm('¿Estás seguro de que quieres eliminar esta fruta? 😮')) {
                const respuesta = await fetch(`/frutas/${id}`, {
                    method: 'DELETE'
                });

                if (respuesta.ok) {
                    alert('Fruta eliminada correctamente. 👋');
                    cargarFrutas(); 
                } else {
                    alert('No se pudo eliminar la fruta. ❌');
                }
            }
        }

        // Cargar la lista apenas abra la página
        window.onload = cargarFrutas;
    