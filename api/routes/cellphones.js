import cellphoneModel from '../../db/models/cellphoneModel'


// Wrapper for all handlers related to cellphones
let handlers = {}

// Get -- retrieve all cellphone
// No params required
handlers.getAll = () => {

}

// Get -- retrieve cellphones by parameter
// params: ?q=[valid cellphone property]&v=[value of property]
handlers.getByParam = () => {
  
}

// Get -- retrieve cellphone by ID
// params: ?id=[valid cellphone id]
handlers.getById = () => {
  
}

// Post -- create new cellphone
// Request body should contain :
// {
//  model: '',
//  brand: '',
//  year: '',
//  description: 'optional'
// }

handlers.create = () => {
  
}

// Put -- edit a existing cellphone completely (replace object)
handlers.update = () => {
  
}

// Patch -- edit a existing cellphone partially (only updated properties)
handlers.edit = () => {
  
}

// Delete -- remove a cellphone
handlers.delete = () => {
  
}

export default handlers