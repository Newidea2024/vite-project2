document.addEventListener('DOMContentLoaded', () => {
    const apiUrl = 'http://localhost:3000/entities';
    const entityForm = document.getElementById('entityForm');
    const entityList = document.getElementById('entityList');
  
    // Fetch and display entities from the API
    async function fetchEntities() {
      try {
        const response = await fetch(apiUrl);
        const entities = await response.json();
        entityList.innerHTML = ''; // Clear the list
        entities.forEach(entity => {
          const li = document.createElement('li');
          li.className = 'list-group-item d-flex justify-content-between align-items-center';
          li.textContent = `${entity.name}: ${entity.description}`;
          const deleteBtn = document.createElement('button');
          deleteBtn.className = 'btn btn-danger btn-sm';
          deleteBtn.textContent = 'Delete';
          deleteBtn.addEventListener('click', () => deleteEntity(entity.id));
          li.appendChild(deleteBtn);
          entityList.appendChild(li);
        });
      } type EntityType = {
        id: number;
        name: string;
        // Add other properties
      };
      
      const entities: EntityType[] = []; // Example array
      
    }
  
    // Add a new entity using the form
    entityForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const description = document.getElementById('description').value;
      try {
        await fetch(apiUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name, description })
        });
        entityForm.reset();
        fetchEntities(); // Refresh the list
      } function createEntity(entity: EntityType): void {
        // Function logic
      }
      
    });
  
    // Delete an entity
    type EntityType = {
      id: number;
      name: string;
      // Add other properties
    };
    
    const entities: EntityType[] = []; // Example array
    
  
    // Initial fetch to populate the list
    fetchEntities();
  });
  import 'bootstrap/dist/css/bootstrap.min.css';
  import { helperFunction } from './utilities';
  