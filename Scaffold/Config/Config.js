let api = [
  {
    "name": "Categories",
    "belongsTo": [],
    "hasMany": [
      "Items"
    ],
    "verbose": false,
    "columns": [
      {
        "key": "name",
        "type": "STRING"
      }
    ]
  },
  {
    "name": "Items",
    "belongsTo": [
      "Categories"
    ],
    "hasMany": [],
    "verbose": false,
    "columns": [
      {
        "key": "name",
        "type": "STRING"
      },
      {
        "key": "price",
        "type": "DOUBLE PRECISION"
      },
      {
        "key": "description",
        "type": "STRING"
      },
      {
        "key": "quantity",
        "type": "INTEGER"
      }
    ]
  },
  {
    "name": "Customers",
    "belongsTo": [
      "Users"
    ],
    "hasMany": [
      "Orders"
    ],
    "verbose": false,
    "columns": [
      {
        "key": "first_name",
        "type": "STRING"
      },
      {
        "key": "last_name",
        "type": "STRING"
      },
      {
        "key": "phone_number",
        "type": "STRING"
      },
      {
        "key": "address",
        "type": "STRING"
      },
      {
        "key": "city",
        "type": "STRING"
      },
      {
        "key": "notes",
        "type": "STRING"
      }
    ]
  },
  {
    "name": "Orders",
    "belongsTo": [
      "Customers"
    ],
    "hasMany": [
      "OrderItems"
    ],
    "verbose": false,
    "columns": [
      {
        "key": "first_name",
        "type": "STRING"
      },
      {
        "key": "last_name",
        "type": "STRING"
      },
      {
        "key": "address",
        "type": "STRING"
      },
      {
        "key": "city",
        "type": "STRING"
      },
      {
        "key": "phone_number",
        "type": "STRING"
      },
      {
        "key": "email",
        "type": "STRING"
      },
      {
        "key": "date",
        "type": "DATEONLY"
      },
      {
        "key": "time",
        "type": "TIME"
      },
      {
        "key": "canceled",
        "type": "BOOLEAN"
      }
    ]
  },
  {
    "name": "OrderItems",
    "hasMany": [],
    "belongsTo": [
      "Orders",
      "Items"
    ],
    "verbose": false,
    "columns": []
  },
  {
    "name": "Employees",
    "belongsTo": [
      "Users"
    ],
    "hasMany": [],
    "verbose": false,
    "columns": [
      {
        "key": "first_name",
        "type": "STRING"
      },
      {
        "key": "last_name",
        "type": "STRING"
      },
      {
        "key": "email",
        "type": "STRING"
      },
      {
        "key": "password",
        "type": "STRING"
      }
    ]
  },
  {
    "name": "Expenses",
    "belongsTo": [],
    "hasMany": [],
    "verbose": false,
    "columns": [
      {
        "key": "date",
        "type": "DATEONLY"
      },
      {
        "key": "gas",
        "type": "DOUBLE PRECISION"
      },
      {
        "key": "employees",
        "type": "DOUBLE PRECISION"
      },
      {
        "key": "misc",
        "type": "DOUBLE PRECISION"
      }
    ]
  },
  {
    "name": "Packages",
    "hasMany": [
      "Items",
      "PackageItems"
    ],
    "belongsTo": [],
    "verbose": false,
    "columns": [
      {
        "key": "name",
        "type": "STRING"
      },
      {
        "key": "price",
        "type": "DOUBLE PRECISION"
      },
      {
        "key": "description",
        "type": "STRING"
      },
      {
        "key": "quantity",
        "type": "INTEGER"
      }
    ]
  },
  {
    "name": "PackageItems",
    "hasMany": [],
    "belongsTo": [
      "Items"
    ],
    "verbose": false,
    "columns": []
  },
  {
    "name": "Users",
    "hasMany": [
      "Expenses",
      "Employees",
      "Customers"
    ],
    "belongsTo": [],
    "verbose": false,
    "columns": [
      {
        "key": "email",
        "type": "STRING"
      },
      {
        "key": "password",
        "type": "STRING"
      },
      {
        "key": "first_name",
        "type": "STRING"
      },
      {
        "key": "last_name",
        "type": "STRING"
      },
      {
        "key": "role",
        "type": "STRING"
      }
    ]
  }
]
 module.exports = api