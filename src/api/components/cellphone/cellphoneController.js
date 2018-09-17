import cellphoneDAL from './cellphoneDAL'

// Wrapper for all handlers related to cellphones
let cellphoneController = {}

// Get -- retrieve all cellphone
// No params required
cellphoneController.getAll = (req, res) => {
  Promise.resolve(cellphoneDAL.get()).then((result) => {
    res.status(200).send(result)
  })
}

// Get -- retrieve cellphones by parameter
// parameters: /q/:param
cellphoneController.getByParam = (req, res) => {
  if (req.params.q) {
    Promise.resolve(cellphoneDAL.get(req.params)).then((result) => {
      res.status(200).send(result)
    })
  } else {
    res.status(400).send('Invalid Parameter')
  }
}

// Get -- retrieve cellphone by ID
// parameters: /id/:id
cellphoneController.getById = (req, res) => {
  if (req.params.id) {
    Promise.resolve(cellphoneDAL.get(req.params)).then((result) => {
      res.status(200).send(result)
    })
  } else {
    res.status(400).send('Invalid Id')
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
  if (req.body) {
    Promise.resolve(cellphoneDAL.post(req.body)).then((result) => {
      res.status(200).send(result)
    })
  } else {
    res.status(400).send('No cellphone informed')
  }
}

// Patch -- edit a existing cellphone partially (only updated properties)
// parameter: /id/:id
cellphoneController.update = (req, res) => {
  let cellphoneUpdate = req.body
  let cellphoneId = req.params.id
  Promise.resolve(cellphoneDAL.patch(cellphoneId, cellphoneUpdate)).then((result) => {
    res.status(200).send(result)
  })
}

// Put -- edit a existing cellphone completely (replace object)
// parameter: /id/:id
cellphoneController.replace = (req, res) => {
  let cellphoneUpdate = req.body
  let cellphoneId = req.params.id
  Promise.resolve(cellphoneDAL.put(cellphoneId, cellphoneUpdate)).then((result) => {
    if (result.err) {
      res.status(400).send('Could not replace cellphone.' + result.err)
    } else {
      res.status(200).send(result.updatedDocument)
    }
  })
}

// Delete -- remove a cellphone
// parameter: /id/:id
cellphoneController.delete = (req, res) => {

}

export default cellphoneController
