const superHeroes = [
  {
    nombre: 'Spider-Man',
    poderes: ['Trepar muros', 'sentido aracnido', 'lanzar telarañas'],
    equipo: 'Avengers',
  },
  {
    nombre: 'Iron Man',
    poderes: ['tecnología avanzada', 'armadura de combate'],
    equipo: 'Avengers',
  },
  {
    nombre: 'Thor',
    poderes: [
      'fuerza sobrehumana',
      'control sobre el clima',
      'vuela con su martillo Mjolnir',
    ],
    equipo: 'Avengers',
  },
  {
    nombre: 'Hulk',
    poderes: ['fuerza descomunal', 'regeneración celular'],
    equipo: 'Avengers',
  },
  {
    nombre: 'Capitán América',
    poderes: [
      'fuerza, velocidad y agilidad sobrehumanas',
      'dominio del combate cuerpo a cuerpo',
    ],
    equipo: 'Avengers',
  },
]

superHeroes.push({
  nombre: 'Iron Man',
  poderes: ['Tecnología', 'Inteligencia', 'Dinero'],
  equipo: 'vengadores',
})
let superHeroeQuitado = superHeroes.pop()
// console.log(superHeroeQuitado)
superHeroes.unshift({
  nombre: 'Iron Man',
  poderes: ['Tecnología', 'Inteligencia', 'Dinero'],
  equipo: 'vengadores',
})
superHeroeQuitado = superHeroes.shift()
// console.log(superHeroes.length)

const index = superHeroes.indexOf({
  nombre: 'Spider-Man',
  poderes: ['Trepar muros', 'sentido aracnido', 'lanzar telarañas'],
  equipo: 'vengadores',
})
// console.log(index)
const poderes = superHeroes[0].poderes.join(' - ')
// console.log(poderes)

// const ultimosDosHeroes = superHeroes.slice(-2)
const ultimosDosHeroes = superHeroes.slice(3, 5)
// console.table(ultimosDosHeroes)

const nuevoSuperHeroe = {
  nombre: 'Black Widow',
  poderes: ['combate cuerpo a cuerpo', 'espiojane'],
  equipo: 'vengadores',
}

// Primer parametro: comienzo
// segundo parametro: cantidad a eliminar (puede ser cero)
// tercer parametro: [opcional] elemento/s a agregar
superHeroes.splice(3, 0, nuevoSuperHeroe)

console.table(superHeroes)

const villanosMarvel = [
  {
    nombre: 'Thanos',
    poderes: [
      'fuerza sobrehumana',
      'inteligencia',
      'uso del Guantelete del Infinito',
    ],
    equipo: 'Independiente',
  },
  {
    nombre: 'Loki',
    poderes: ['magia', 'ilusiones', 'cambio de forma'],
    equipo: 'Independiente',
  },
  {
    nombre: 'Magneto',
    poderes: ['control magnético', 'vuelo', 'creación de campos de fuerza'],
    equipo: 'Hermandad de Mutantes',
  },
  {
    nombre: 'Venom',
    poderes: ['fuerza sobrehumana', 'sentidos mejorados', 'regeneración'],
    equipo: 'Símbionte',
  },
  {
    nombre: 'Duende Verde',
    poderes: ['fuerza sobrehumana', 'inteligencia', 'tecnología avanzada'],
    equipo: 'Sinister Six',
  },
]

console.table(villanosMarvel)

console.table(superHeroes.concat(villanosMarvel))

console(superHeroes.sort())

