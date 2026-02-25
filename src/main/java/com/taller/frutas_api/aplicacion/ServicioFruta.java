package com.taller.frutas_api.aplicacion;

import com.taller.frutas_api.dominio.Fruta;
import com.taller.frutas_api.dominio.RepositorioFruta; 
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor

public class ServicioFruta {

    private final RepositorioFruta repositorioFruta;

    public List<Fruta> listarFrutas() {
        return repositorioFruta.findAll();
    }

    public Fruta guardarFruta(Fruta fruta) {
        return repositorioFruta.save(fruta);
    }

    public void eliminarFruta(Long id) {
        repositorioFruta.deleteById(id);
    }
    
}
