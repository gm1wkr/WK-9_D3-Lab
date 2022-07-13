use bookings;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Bart simpson",
    email: "bart@example.com",
    isCheckedIn: false
  },
  {
    name: "Calum Simpson",
    email: "Calum@example.com",
    isCheckedIn: true
  },
  {
    name: "Bob Manny",
    email: "bob@example.com",
    isCheckedIn: false
  },
  {
    name: "Martin James",
    email: "martin@example.com",
    isCheckedIn: false
  },
  {
    name: "Julie Fowlis",
    email: "julie@example.com",
    isCheckedIn: false
  }
]);
