import { Injectable } from '@angular/core';
import { Juego } from '../model/juego';

@Injectable({
  providedIn: 'root',
})
export class Juegos {
  private listaJuegos: Juego[] = [
    {
      id: 1,
      nombre: 'Interstellar',
      genero: 'Ciencia Ficcion',
      plataforma: 'Cine',
      anio: 2014,
      rating: 9.3,
      imagen: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
      descripcion: 'En un futuro cercano, la Tierra se encuentra al borde del colapso debido a una devastadora crisis alimentaria. Un grupo de astronautas liderado por el ex piloto Cooper emprende un viaje a través de un agujero de gusano cerca de Saturno con la esperanza de encontrar un nuevo hogar para la humanidad. La película explora temas profundos como el amor, el tiempo y la supervivencia, combinando ciencia real con una narrativa emocionalmente poderosa.'
    },
    {
      id: 2,
      nombre: 'El Padrino',
      genero: 'Drama',
      plataforma: 'Cine',
      anio: 1972,
      rating: 9.2,
      imagen: 'https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg',
      descripcion: 'La historia de la familia Corleone, una de las familias mafiosas más poderosas de Nueva York. Cuando el patriarca Vito Corleone es atacado, su hijo Michael se ve obligado a involucrarse para proteger a su familia. A lo largo de los años, Michael se transforma de un joven idealista en un despiadado líder del crimen organizado, sacrificando su humanidad en el proceso.'
    },
    {
      id: 3,
      nombre: 'El Origen',
      genero: 'Accion',
      plataforma: 'Cine',
      anio: 2010,
      rating: 8.8,
      imagen: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
      descripcion: 'Dom Cobb es un ladrón especializado en adentrarse en los sueños de las personas para robar secretos de su subconsciente. Se le ofrece la oportunidad de borrar su pasado criminal a cambio de plantar una idea en la mente de un poderoso empresario. Para lograrlo, Cobb y su equipo deben construir un sueño dentro de otro sueño, adentrándose en capas cada vez más profundas de la realidad y la ilusión.'
    },
    {
      id: 4,
      nombre: 'Forrest Gump',
      genero: 'Drama',
      plataforma: 'Cine',
      anio: 1994,
      rating: 8.8,
      imagen: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg',
      descripcion: 'Forrest Gump es un hombre de Alabama con una inteligencia por debajo del promedio pero con un corazón extraordinariamente noble. A través de su vida, sin buscarlo, se convierte en testigo y partícipe de algunos de los eventos más importantes de la historia de Estados Unidos durante la segunda mitad del siglo XX. Su historia es un recordatorio de que la bondad y la perseverancia pueden llevar a una persona más lejos que cualquier talento.'
    },
    {
      id: 5,
      nombre: 'The Dark Knight',
      genero: 'Accion',
      plataforma: 'Cine',
      anio: 2008,
      rating: 9.0,
      imagen: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
      descripcion: 'Batman enfrenta su mayor desafío cuando el Joker desata el caos en Gotham City con el objetivo de demostrar que cualquier persona puede corromperse bajo suficiente presión. La película explora los límites morales del héroe, la naturaleza del mal y el precio que conlleva proteger a una ciudad que no siempre merece ser salvada. Una de las representaciones más aclamadas del género de superhéroes en la historia del cine.'
    }
  ];

  obtenerJuegos(): Juego[] {
    return this.listaJuegos;
  }

  obtenerJuegoPorNombre(nombre: string): Juego | undefined {
    return this.listaJuegos.find((juego: Juego) => juego.nombre.toLowerCase() === nombre.toLowerCase());
  }
}
