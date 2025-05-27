import type { Column, Row } from './types';

export const columns: Column[] = [
	{
		id: "name",
		ordinalNo: 1,
		title: "Name",
		type: "string",
		width: 250
	},
	{
		id: "age",
		ordinalNo: 2,
		title: "Age",
		type: "number",
		width: 75
	},
	{
		id: "married",
		ordinalNo: 3,
		title: "Married",
		type: "boolean",
		width: 100
	},
	{
		id: "gender",
		ordinalNo: 4,
		title: "Gender",
		type: "selection list",
    selectOptions: ['Male', 'Female', 'Other'],
		width: 150
	},
  {
    id: "role",
		ordinalNo: 5,
		title: "Role",
		type: "selection list",
    selectOptions: ['admin', 'user', 'moderator'],
		width: 150
  }
]

export const rows: Row[] = [
  {
    "id": "row1",
    "gender": "Male",
    "name": "John Smith",
    "age": 42,
    "married": true
  },
  {
    "id": "row2",
    "age": 29,
    "married": false,
    "gender": "Female"
  },
  {
    "id": "row3",
    "name": "Alice Williams",
    "married": true,
    "gender": "Other"
  },
  {
    "id": "row4",
    "name": "Bob Jones",
    "age": 53,
    "gender": "Male"
  },
  {
    "id": "row5",
    "name": "Charlie Brown",
    "age": 27,
    "married": true,
  },
  {
    "id": "row6",
    "name": "David Davis",
    "age": 61,
    "married": false,
    "gender": "Male"
  },
  {
    "id": "row7",
    "name": "Eve Miller",
    "age": 33,
    "married": true,
    "gender": "Female"
  },
  {
    "id": "row8",
    "name": "Frank Wilson",
    "age": 45,
    "married": false,
    "gender": "Other"
  },
  {
    "id": "row9",
    "name": "Grace Moore",
    "age": 19,
    "married": true,
    "gender": "Female"
  },
  {
    "id": "row10",
    "name": "Hank Taylor",
    "age": 50,
    "married": false,
    "gender": "Male"
  },
  {
    "id": "row11",
    "name": "Ivy Anderson",
    "age": 28,
    "married": true,
    "gender": "Female"
  },
  {
    "id": "row12",
    "name": "Jack Thomas",
    "age": 39,
    "married": false,
    "gender": "Male"
  },
  {
    "id": "row13",
    "name": "Karen Jackson",
    "age": 47,
    "married": true,
    "gender": "Other"
  },
  {
    "id": "row14",
    "name": "Leo White",
    "age": 22,
    "married": false,
    "gender": "Male"
  },
  {
    "id": "row15",
    "name": "Mona Harris",
    "age": 36,
    "married": true,
    "gender": "Female"
  },
  {
    "id": "row16",
    "name": "Ned Martin",
    "age": 58,
    "married": false,
    "gender": "Male"
  },
  {
    "id": "row17",
    "name": "Olive Thompson",
    "age": 31,
    "married": true,
    "gender": "Female"
  },
  {
    "id": "row18",
    "name": "Paul Garcia",
    "age": 44,
    "married": false,
    "gender": "Other"
  },
  {
    "id": "row19",
    "name": "Quincy Martinez",
    "age": 25,
    "married": true,
    "gender": "Male"
  },
  {
    "id": "row20",
    "name": "Rose Robinson",
    "age": 52,
    "married": false,
    "gender": "Female"
  },
  {
    "id": "row21",
    "name": "Steve Clark",
    "age": 38,
    "married": true,
    "gender": "Male"
  },
  {
    "id": "row22",
    "name": "Tina Rodriguez",
    "age": 30,
    "married": false,
    "gender": "Female"
  },
  {
    "id": "row23",
    "name": "Uma Lewis",
    "age": 49,
    "married": true,
    "gender": "Other"
  },
  {
    "id": "row24",
    "name": "Victor Lee",
    "age": 26,
    "married": false,
    "gender": "Male"
  },
  {
    "id": "row25",
    "name": "Wendy Walker",
    "age": 41,
    "married": true,
    "gender": "Female"
  },
  {
    "id": "row26",
    "name": "Xander Hall",
    "age": 34,
    "married": false,
    "gender": "Male"
  },
  {
    "id": "row27",
    "name": "Yara Allen",
    "age": 55,
    "married": true,
    "gender": "Female"
  },
  {
    "id": "row28",
    "name": "Zane Young",
    "age": 23,
    "married": false,
    "gender": "Other"
  },
  {
    "id": "row29",
    "name": "Abel King",
    "age": 46,
    "married": true,
    "gender": "Male"
  },
  {
    "id": "row30",
    "name": "Bella Wright",
    "age": 37,
    "married": false,
    "gender": "Female"
  }
]
