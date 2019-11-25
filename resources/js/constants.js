const phones = [
    '8 925 073 02 81',
    '8 977 890 87 34'
];
const recipeIngridients =[
    [
        "1 lb Salmon",
        "1 cup Pine Nuts",
        "2 cups Butter Lettuce",
        "1 Yellow Squash",
        "1/2 cup Olive Oil",
        "3 cloves of Garlic",
    ],
    [
        "¼ cup plain yogurt",
        "1 tbsp. apple cider vinegar",
        "1 tbsp. water",
        "Salt",
        "Black pepper",
        "1 can chickpeas, rinsed and drained",
        "2 ½ cups of sliced green cabbage",
        "2 stalks celery (sliced)",
        "2 shredded carrots",
        "2 tbsps. sesame seeds (toasted)",
    ],
    [
        "A handful of kale",
        "A handful of cabbage",
        "A handful of parsley",
        "A stalk of celery",
        "1/2 cup Olive Oil",
        "An apple or a pear",
    ]
];
const recipeNames = [
    {
        "Baker Salomon": {
            id: "recipe-0",
            "data-type": "title",
        }
    },
    {
        "Chickpea Slaw": {
            id: "recipe-1",
            "data-type": "title",
            "data-react-root": "title"
        }
    },
    {
        "Juice Your Greens": {
            id: "recipe-2",
            "data-type": "title",
            "data-react-root": "title"
        }
    },
];

const data = [
    {"name": "Baked Salmon",
        "ingredients": [
            { "name": "Salmon", "amount": 1, "measurement": "l lb" },
            { "name": "Pine Nuts", "amount": 1, "measurement": "cup" },
            { "name": "Butter Lettuce", "amount": 2, "measurement": "cups" },
            { "name": "Yellow Squash", "amount": 1, "measurement": "med" },
            { "name": "Olive Oil", "amount": 0.5, "measurement": "cup" },
            { "name": "Garlic", "amount": 3, "measurement": "cloves" }
        ],
        "steps": [
            "Preheat the oven to 350 degrees.",
            "Spread the olive oil around a glass baking dish.",
            "Add the salmon, garlic, and pine nuts to the dish.",
            "Bake for 15 minutes.",
            "Add the yellow squash and put back in the oven for 30 mins.",
            "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
        ]
    },
    {
        "name": "Fish Tacos",
        "ingredients": [
            { "name": "Whitefish", "amount": 1, "measurement": "l lb" },
            { "name": "Cheese", "amount": 1, "measurement": "cup" },
            { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
            { "name": "Tomatoes", "amount": 2, "measurement": "large"},
            { "name": "Tortillas", "amount": 3, "measurement": "med" }
        ],
        "steps": [
            "Cook the fish on the grill until hot.",
            "Place the fish on the 3 tortillas.",
            "Top them with lettuce, tomatoes, and cheese."
        ]
    }
];

let recept = {
    "name": "Fish Tacos",
    "ingredients": [
        { "name": "Whitefish", "amount": 1, "measurement": "l lb" },
        { "name": "Cheese", "amount": 1, "measurement": "cup" },
        { "name": "Iceberg Lettuce", "amount": 2, "measurement": "cups" },
        { "name": "Tomatoes", "amount": 2, "measurement": "large"},
        { "name": "Tortillas", "amount": 3, "measurement": "med" }
    ],
    "steps": [
        "Cook the fish on the grill until hot.",
        "Place the fish on the 3 tortillas.",
        "Top them with lettuce, tomatoes, and cheese."
    ]
};

const test_data = {
  name:"test",
  lName:"test_ivanov",
  title:"description"
};
const form = {
    action:"/",
    method:'POST',
    className:[],
    inputs:[
        {name:'color_name', type:'text',is_required:false,className:[]}
    ]
};

export {phones,recipeIngridients,recipeNames,data,test_data,recept,form}
