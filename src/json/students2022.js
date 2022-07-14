const students = {
  "Hailey G": ["https://CYOA-p5.haileygrimes.repl.co"],
  "David B": [
    "https://replit.com/@buckldav/DinoGameP5Starter",
    "https://replit.com/@buckldav/PizzaStarter",
  ],
  "Kate K": ["https://replit.com/@KateKeeley/CYOA-p5#script.js"]
};

const studentsSorted = Object.keys(students)
  .sort()
  .reduce((obj, key) => {
    obj[key] = students[key];
    return obj;
  }, {});

export default studentsSorted;
