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
    poderes: ['fuerza sobrehumana', 'tecnología avanzada'],
    equipo: 'Sinister Six',
  },
]

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
  {
    nombre: 'Batman',
    poderes: ['ser un ninja', 'dinero', 'ser BATMAN'],
    equipo: 'Justice League',
  },
]

// const nombresVillanosMayuscula = villanosMarvel.map(function (villano) {
//   return villano.nombre.toUpperCase()
// })
const nombresVillanosMayuscula = villanosMarvel.map(
  (villano, index) => index + '-' + villano.nombre.toUpperCase()
)
// console.table(nombresVillanosMayuscula)

const villanosIndependientes = villanosMarvel.filter(
  (villano) => villano.equipo === 'Independiente'
)
// console.table(villanosIndependientes)

const totalPoderes = villanosMarvel.reduce((total, villano) => {
  return total + villano.poderes.length
}, 0)

console.log('total de poderes de los villanos: ', totalPoderes)

villanosMarvel.forEach((villano, indice) => {
  console.log(`villano N° ${indice + 1}`)
  console.log(`Nombre del villano ${villano.nombre}`)
  console.log(`Equipo del villano ${villano.equipo}`)
  console.log(`Poderes del villano ${villano.poderes}`)
  console.log(`------------------------------------`)
})

const villanosOrdenados = [...villanosMarvel]
villanosOrdenados.sort((a, b) => {
  return a.nombre < b.nombre ? 1 : a.nombre > b.nombre ? -1 : 0
})

console.table(villanosOrdenados)

const encontrado =
  villanosMarvel.find((villano) => villano.nombre === 'Duende Rojo') ??
  'nosencontro'

/* if (encontrado) {
  console.log(encontrado)
} else {
  console.log('nosencontro')
} */

console.log(encontrado)

const algunSiniestro = villanosMarvel.some(
  (villano) => villano.equipo === 'Sinister Six'
)

console.log(algunSiniestro ? 'Si hay un siniestro' : 'No hay siniestros')

const todosVengadores = superHeroes.every(
  (heroe) => heroe.equipo === 'Avengers'
)

console.log(
  todosVengadores ? 'Si todos son vengadores' : 'No todos son vengadores'
)
