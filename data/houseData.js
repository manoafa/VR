export default house = {
  House: {
    roomName: 'House',
    adjacentRooms: ['Foyer'],
  },
  Foyer: {
    roomName: 'Foyer' ,
    img: 'foyer.jpg',
    adjacentRooms: ['Dining_Room', 'Living_Room']
  },
  Dining_Room: {
    roomName: 'Dining_Room',
    img: 'dining_room.jpg',
    adjacentRooms: ['Kitchen', 'Foyer']
  },
  Kitchen: {
    roomName: 'Kitchen',
    img: 'kitchen.jpg',
    adjacentRooms: ['Living_Room','Breakfast_Nook']
  },
  Breakfast_Nook: {
    roomName: 'Breakfast_Nook',
    img: 'breakfast_nook.jpg',
    adjacentRooms: ['Backyard','Living_Room','Kitchen', 'Master_Bedroom', 'Laundry_Room']
  },
  Backyard: {
    roomName: 'Backyard',
    img: 'backyard.jpg',
    adjacentRooms: ['Breakfast_Nook','Bedroom_One']
  },
  Master_Bedroom: {
    roomName: 'Master_Bedroom',
    img: 'master_bedroom.jpg',
    adjacentRooms: ['Master_Bathroom','Breakfast_Nook']
  },
  Master_Bathroom:  {
    roomName: 'Master_Bathroom',
    img: 'master_bathroom.jpg',
    adjacentRooms: ['Master_Bedroom', 'Master_Bathroom_Two']
  },
  Master_Bathroom_Two: {
    roomName: 'Master_Bathroom_Two',
    img: 'master_bathroom_two.jpg',
    adjacentRooms: ['Master_Bathroom']
  },
  Living_Room: {
    roomName: 'Living_Room',
    img: 'living_room.jpg',
    adjacentRooms: ['Foyer', 'Breakfast_Nook', 'Bedroom_One', 'Bedroom_Two', 'Bedroom_Three','Bathroom_Two']
  },
  Bedroom_One: {
    roomName: 'Bedroom_One',
    img: 'bedroom_one.jpg',
    adjacentRooms:['Bathroom_One','Backyard','Living_Room']
  },
  Bathroom_One: {
    roomName: 'Bathroom_One',
    img: 'bathroom_one.jpg',
    adjacentRooms: ['Bedroom_One']
  },
  Bathroom_Two: {
    roomName: 'Bathroom_Two',
    img: 'bathroom_two.jpg',
    adjacentRooms: ['Living_Room', 'Bedroom_Two', 'Bedroom_Three']
  },
  Bedroom_Two: {
    roomName: 'Bedroom_Two',
    img: 'bedroom_two.jpg',
    adjacentRooms: ['Bedroom_Three','Bathroom_Two']
  },
  Bedroom_Three: {
    roomName: 'Bedroom_Three',
    img: 'bedroom_three.jpg',
    adjacentRooms: ['Bedroom_Two','Bathroom_Two']
  },
  Laundry_Room: {
    roomName: 'Laundry_Room',
    img: 'laundry_room.jpg',
    adjacentRooms: ['Master_Bedroom','Breakfast_Nook', 'Garage']
  },
  Garage: {
    roomName: 'Garage',
    img: 'garage.jpg',
    adjacentRooms: ['Laundry_Room']
  }
}
