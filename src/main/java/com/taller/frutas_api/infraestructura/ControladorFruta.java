package com.taller.frutas_api.infraestructura;

import com.taller.frutas_api.aplicacion.ServicioFruta;
import com.taller.frutas_api.dominio.Fruta;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/frutas") // esta anotación se utiliza para mapear las solicitudes HTTP a métodos específicos en el controlador. En este caso, todas las solicitudes que comiencen con "/frutas" serán manejadas por este controlador.
@RequiredArgsConstructor

public class ControladorFruta {
    
    private final ServicioFruta servicioFruta;

    @GetMapping
    public List<Fruta> listarFrutas() {
        return servicioFruta.listarFrutas();
    }

    @PostMapping
    public Fruta guardarFruta(@RequestBody Fruta fruta) {
        return servicioFruta.guardarFruta(fruta);
    }

    @DeleteMapping("/{id}")
    public void eliminarFruta(@PathVariable Long id) {
        servicioFruta.eliminarFruta(id);
    }
    
}
