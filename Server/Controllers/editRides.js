module.exports = {
    create: (req, res, next) => {
      const dbInstance = req.app.get('db')
      const {name, description} = req.body
      
      dbInstance.create_ride([name, description])
      .then( () => res.sendStatus(200))
      .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
      })
    },
    view: (req, res, next) => {
        const dbInstance = req.app.get('db')
      
      dbInstance.view_rides()
      .then( rides => res.status(200).send(rides))
      .catch( err => {
          res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
      })
    },
    update: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {rideId} = req.params
        const {description} = req.body
      
        dbInstance.update_description([rideId, description])
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
        })
    },
    delete: (req, res, next) => {
        const dbInstance = req.app.get('db')
        const {rideId} = req.params
      
        dbInstance.delete_ride(rideId)
        .then( () => res.sendStatus(200))
        .catch( err => {
            res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"})
        })
    }
}
