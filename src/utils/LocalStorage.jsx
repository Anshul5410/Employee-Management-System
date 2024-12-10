const employees = [
  {
    "id": 1,
    "firstName": "Raj",
    "email": "e@e.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskCount": 1,
        "title": "Task 1",
        "description": "Description of task 1",
        "date": "2024-11-01",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskCount": 2,
        "title": "Task 2",
        "description": "Description of task 2",
        "date": "2024-11-02",
        "category": "Testing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskCount": 3,
        "title": "Task 3",
        "description": "Description of task 3",
        "date": "2024-11-03",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Amit",
    "email": "employee2@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskCount": 1,
        "title": "Task 1",
        "description": "Description of task 1",
        "date": "2024-11-01",
        "category": "Support",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskCount": 2,
        "title": "Task 2",
        "description": "Description of task 2",
        "date": "2024-11-02",
        "category": "Maintenance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "taskCount": 3,
        "title": "Task 3",
        "description": "Description of task 3",
        "date": "2024-11-03",
        "category": "Design",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskCount": 4,
        "title": "Task 4",
        "description": "Description of task 4",
        "date": "2024-11-04",
        "category": "Analysis",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskCount": 1,
        "title": "Task 1",
        "description": "Description of task 1",
        "date": "2024-11-01",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskCount": 2,
        "title": "Task 2",
        "description": "Description of task 2",
        "date": "2024-11-02",
        "category": "Testing",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskCount": 3,
        "title": "Task 3",
        "description": "Description of task 3",
        "date": "2024-11-03",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskCount": 4,
        "title": "Task 4",
        "description": "Description of task 4",
        "date": "2024-11-04",
        "category": "Research",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "taskCount": 5,
        "title": "Task 5",
        "description": "Description of task 5",
        "date": "2024-11-05",
        "category": "Analysis",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Neha",
    "email": "employee4@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskCount": 1,
        "title": "Task 1",
        "description": "Description of task 1",
        "date": "2024-11-01",
        "category": "Development",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskCount": 2,
        "title": "Task 2",
        "description": "Description of task 2",
        "date": "2024-11-02",
        "category": "Deployment",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskCount": 3,
        "title": "Task 3",
        "description": "Description of task 3",
        "date": "2024-11-03",
        "category": "QA",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Ravi",
    "email": "employee5@example.com",
    "password": "123",
    "taskCount": {
      "active": 1,
      "newTask": 2,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskCount": 1,
        "title": "Task 1",
        "description": "Description of task 1",
        "date": "2024-11-01",
        "category": "Support",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskCount": 2,
        "title": "Task 2",
        "description": "Description of task 2",
        "date": "2024-11-02",
        "category": "Maintenance",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": true
      },
      {
        "taskCount": 3,
        "title": "Task 3",
        "description": "Description of task 3",
        "date": "2024-11-03",
        "category": "Research",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskCount": 4,
        "title": "Task 4",
        "description": "Description of task 4",
        "date": "2024-11-04",
        "category": "Design",
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskCount": 5,
        "title": "Task 5",
        "description": "Description of task 5",
        "date": "2024-11-05",
        "category": "Analysis",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }
];


const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];




export const setLocalStorage = ()=>{
    localStorage.setItem("employees",JSON.stringify(employees))
    localStorage.setItem("admin",JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem("employees"))
    const admin = JSON.parse(localStorage.getItem("admin"))
    return{employees,admin}
}