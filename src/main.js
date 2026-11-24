const maPromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Données reçues") // succès
  }, 2000)
})

console.log(maPromesse)
