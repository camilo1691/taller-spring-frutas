package com.taller.frutas_api.dominio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository    // aca se le dice a Spring que esta interfaz es un repositorio, lo que le permite inyectarla en otros componentes y usarla para acceder a la base de datos
               // tambien se le dice Le indica a Spring que esta clase es un componente de acceso a datos y debe ser manejado por su "contenedor de frijoles" (Bean Container)

               public interface RepositorioFruta extends JpaRepository<Fruta, Long> {

                // aca le decimos a Spring que este repositorio es para la entidad Fruta y que su llave primaria (@Id) es de tipo Long
}

