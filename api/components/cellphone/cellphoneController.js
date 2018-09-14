import cellphoneDAL from './cellphoneDAL'

// Wrapper for all handlers related to cellphones
let cellphoneController = {}

// Get -- retrieve all cellphone
// No params required
cellphoneController.getAll = (req, res) => {
  console.log('controller')
  Promise.resolve(cellphoneDAL.get()).then((result) => {
    res.send(200, result)
  })
}

// Get -- retrieve cellphones by parameter
// parameters: /q/:param
cellphoneController.getByParam = (req, res) => {
  if (req.params.q) {
    Promise.resolve(cellphoneDAL.get(req.params)).then((result) => {
      res.send(200, result)
    })
  } else {
    res.send(400, 'Invalid Parameter')
  }
}

// Get -- retrieve cellphone by ID
// parameters: /id/:id
cellphoneController.getById = (req, res) => {
  if (req.params.id) {
    Promise.resolve(cellphoneDAL.get(req.params)).then((result) => {
      res.send(200, result)
    })
  } else {
    res.send(400, 'Invalid Id')
  }
}

// Post -- create new cellphone
// Request body should contain :
// {
//  model: '',
//  brand: '',
//  year: '',
//  description: 'optional'
// }

cellphoneController.create = (req, res) => {

}

// Put -- edit a existing cellphone completely (replace object)
// parameter: /id/:id
cellphoneController.update = (req, res) => {

}

// Patch -- edit a existing cellphone partially (only updated properties)
// parameter: /id/:id
cellphoneController.edit = (req, res) => {

}

// Delete -- remove a cellphone
// parameter: /id/:id
cellphoneController.delete = (req, res) => {

}

export default cellphoneController
