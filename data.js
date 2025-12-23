const products = {
    cafe: [
        {
            id: "c1",
            name: "Strawberry Latte",
            price: 250,
            category: "Hot Brews",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ9uxly6lETtKzctzwSWmULU2a9-hd71sBcA&s",
            description: "Espresso with steamed milk and strawberry syrup.",
            featured: true
        },
        {
            id: "c2",
            name: "Sakura Tea",
            price: 280,
            category: "Hot Brews",
            image: "https://japanfoodstyle.com/wp-content/uploads/2019/02/Sakuracha-Japanese-Cherry-Blossom-Tea-600x500.jpg",
            description: "Delicate cherry blossom tea, lightly sweetened.",
            featured: true
        },
        {
            id: "c3",
            name: "Matcha Latte",
            price: 340,
            category: "Hot Brews",
            image: "https://media.istockphoto.com/id/958377604/photo/coffee.jpg?s=612x612&w=0&k=20&c=zkM_0euXyflwAf4khzd0bZ8yBQY9KdG5q_nzVvHAS6k=",
            description: "Premium matcha whisked with frothy milk.",
            featured: true
        },
        {
            id: "c4",
            name: "Classic Cappuccino",
            price: 220,
            category: "Hot Brews",
            image: "https://media.istockphoto.com/id/958377604/photo/coffee.jpg?s=612x612&w=0&k=20&c=zkM_0euXyflwAf4khzd0bZ8yBQY9KdG5q_nzVvHAS6k=", // Using placeholder re-use or generic
            description: "Rich espresso with thick foam.",
            featured: false
        },
        {
            id: "c5",
            name: "Blueberry Cheesecake",
            price: 350,
            category: "Sweet Treats",
            image: "https://www.loveandoliveoil.com/wp-content/uploads/2015/08/blueberry-creme-friache-cheesecakeFEAT.jpg",
            description: "Creamy cheesecake with fresh blueberry topping.",
            featured: true
        },
        {
            id: "c6",
            name: "Macaron Box (3pcs)",
            price: 180,
            category: "Sweet Treats",
            image: "https://www.loveandoliveoil.com/wp-content/uploads/2015/08/blueberry-creme-friache-cheesecakeFEAT.jpg", // Placeholder
            description: "Assorted pastel macarons.",
            featured: false
        },
        {
            id: "c7",
            name: "Fluffy Pancakes",
            price: 290,
            category: "Sweet Treats",
            image: "https://www.loveandoliveoil.com/wp-content/uploads/2015/08/blueberry-creme-friache-cheesecakeFEAT.jpg", // Placeholder
            description: "Soufflé pancakes with honey and berries.",
            featured: false
        }
    ],
    flowers: [
        {
            id: "f1",
            name: "Flower Bouquet",
            price: 450,
            category: "Bouquet",
            image: "https://content.jdmagicbox.com/comp/def_content/florists/zpm47lwsjm-florists-15-qpoj8-250.jpg",
            description: "Mixed seasonal pastel flowers.",
            featured: true
        },
        {
            id: "f2",
            name: "Spring Breeze",
            price: 550,
            category: "Bouquet",
            image: "https://i.pinimg.com/736x/2a/85/3b/2a853b4776366d92c780d79860f45d8e.jpg",
            description: "Fresh tulips and daisies.",
            featured: false
        },
        {
            id: "f3",
            name: "Rose Romance",
            price: 600,
            category: "Bouquet",
            image: "https://i.pinimg.com/564x/d8/9d/10/d89d1045927f56d776a31818b744081c.jpg",
            description: "Classic red and pink roses.",
            featured: false
        }
    ],
    manga: [
        {
            id: "m1",
            name: "Manga Set",
            price: 1200,
            category: "Set",
            image: "https://i.pinimg.com/736x/9b/06/1d/9b061da8b64a381844879769d4824442.jpg",
            description: "A curated set of 3 random manga volumes.",
            featured: true
        },
        {
            id: "m2",
            name: "Attack on Titan",
            genre: "Action, Dark Fantasy",
            image: "images/aot.jpg",
            featured: false
        },
        {
            id: "m3",
            name: "One Piece",
            genre: "Adventure, Fantasy",
            image: "images/onepiece.jpg",
            featured: false
        },
        {
            id: "m4",
            name: "Naruto",
            genre: "Action, Adventure",
            image: "images/naruto.jpg",
            featured: false
        },
        {
            id: "m5",
            name: "Jujutsu Kaisen",
            genre: "Action, Supernatural",
            image: "images/jjk.jpg",
            featured: false
        },
        {
            id: "m6",
            name: "Chainsaw Man",
            genre: "Action, Horror",
            image: "images/chainsaw.jpg",
            featured: false
        },
        {
            id: "m7",
            name: "Demon Slayer",
            genre: "Action, Supernatural",
            image: "images/demon.jpg",
            featured: false
        },
        {
            id: "m8",
            name: "My Hero Academia",
            genre: "Action, Superhero",
            image: "images/mha.jpg",
            featured: false
        },
        {
            id: "m9",
            name: "Tokyo Ghoul",
            genre: "Dark Fantasy, Horror",
            image: "images/tokyo.jpg",
            featured: false
        }
    ],
    reviews: [
        {
            text: "“The coziest Café vibe — feels like stepping into an anime panel.”",
            author: "Aditi",
            stars: 5
        },
        {
            text: "“Flowers + coffee + manga = heaven for introverts.”",
            author: "Riya",
            stars: 5
        },
        {
            text: "“A perfect escape from work stress. Absolute peace.”",
            author: "Dev",
            stars: 4
        }
    ]
};
