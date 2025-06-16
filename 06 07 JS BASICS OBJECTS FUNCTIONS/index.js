let items = [
  {
    name: "Item A",
    value: 10,
    isActive: true,
    details: { 
        category: "Tools" 
    },
  },
  {
    name: "Item B",
    value: 25,
    isActive: false,
    details: { 
        category: "Books" 
    },
  },
  {
    name: "Item C",
    value: 15,
    isActive: true,
    details: { 
        category: "Games" 
    },
  }
];

items.shift();

items.push({
  name: "Item D",
  value: 30,
  isActive: true,
  details: { 
    category: "Music" 
},
});

items = items.map((item, index) => ({ ...item, id: index }));

const activeItems = items.filter(item => item.isActive);

activeItems.forEach(item => {
  console.log(`${item.id}. ${item.name}`);
});

const sum = items.reduce((acc, item) => acc + item.value, 0);

console.log("Сума значень типу number:", sum);

const someFunc = () => {
  const fetchData = async () => {
    console.log("start");
    try {
      const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      const data = await result.json();
      console.log(data);
    } catch (e) {
      console.log("error:", e);
    }
    console.log("finish");
  };

  fetchData();
};

someFunc();
