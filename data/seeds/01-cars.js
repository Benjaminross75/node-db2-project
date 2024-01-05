// STRETCH
const cars = [
    {
      vin: '1HGCM56827A070021',
      make: 'toyota',
      model: 'prius',
      mileage: 215000,
      title: 'clean',
      transmission: 'manuel',
    },
    {
        vin: '2GKFLZE31E6242579',
        make: 'toyota',
        model: 'prius',
        mileage: 115000,
        title: 'salvage',

      },
      {
        vin: 'WMWZC5C5XEWM58147',
        make: 'ford',
        model: 'focus',
        mileage: 15000,


      }
]
// exports.seed = function(knex){
//     return knex('cars')
//     .truncate().then(()=>{
//       return knex('cars').insert(cars)
//     })

// }

exports.seed = async function(knex){
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}
