let api = [
  {
    "name": "Categories",
    "belongsTo": [],
    "hasMany": [
      "Items"
    ],
    "verbose": false
  },
  {
    "name": "Items",
    "belongsTo": [
      "Categories"
    ],
    "hasMany": [],
    "verbose": false
  },
  {
    "name": "Customers",
    "belongsTo": [
      "Users"
    ],
    "hasMany": [
      "Orders"
    ],
    "verbose": false
  },
  {
    "name": "Orders",
    "belongsTo": [
      "Customers"
    ],
    "hasMany": [
      "OrderItems"
    ],
    "verbose": false
  },
  {
    "name": "OrderItems",
    "hasMany": [],
    "belongsTo": [
      "Orders",
      "Items"
    ],
    "verbose": false
  },
  {
    "name": "Employees",
    "belongsTo": [
      "Users"
    ],
    "hasMany": [],
    "verbose": false
  },
  {
    "name": "Expenses",
    "belongsTo": [],
    "hasMany": [],
    "verbose": false
  },
  {
    "name": "Packages",
    "hasMany": [
      "Items",
      "PackageItems"
    ],
    "belongsTo": [],
    "verbose": false
  },
  {
    "name": "PackageItems",
    "hasMany": [],
    "belongsTo": [
      "PackageItems",
      "Items"
    ],
    "verbose": false
  },
  {
    "name": "Users",
    "hasMany": [
      "Expenses",
      "Employees",
      "Customers"
    ],
    "belongsTo": [],
    "verbose": false
  },
  {
    "name": "Test",
    "hasMany": [],
    "belongsTo": []
  }
]
 module.exports = api