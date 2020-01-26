const validationRules = {
  product: {
    name: 'required|string|min:5',
    description: 'required|string|min:2',
    price: 'required|integer',
    category: 'required|string',
    color: 'required|string'
  }
}

export default validationRules;
