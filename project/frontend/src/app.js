// Configuración de la API
const API_BASE_URL = 'http://localhost:8080/api';

// Clases principales
class Activity {
    constructor(id, title, category, date, description, status = 'pending') {
        this.id = id;
        this.title = title;
        this.category = category;
        this.date = date;
        this.description = description;
        this.status = status;
    }
}

class Category {
    constructor(id, name, description, color) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.color = color;
    }
}

// Utilidades
const formatDate = (date) => {
    return new Date(date).toLocaleString('es-ES', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    });
};

// Gestión de Actividades
class ActivityManager {
    static async getAllActivities() {
        try {
            const response = await fetch(`${API_BASE_URL}/activities`);
            return await response.json();
        } catch (error) {
            console.error('Error al obtener actividades:', error);
            return [];
        }
    }

    static async createActivity(activity) {
        try {
            const response = await fetch(`${API_BASE_URL}/activities`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(activity)
            });
            return await response.json();
        } catch (error) {
            console.error('Error al crear actividad:', error);
            throw error;
        }
    }

    static async updateActivity(id, activity) {
        try {
            const response = await fetch(`${API_BASE_URL}/activities/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(activity)
            });
            return await response.json();
        } catch (error) {
            console.error('Error al actualizar actividad:', error);
            throw error;
        }
    }

    static async deleteActivity(id) {
        try {
            await fetch(`${API_BASE_URL}/activities/${id}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error('Error al eliminar actividad:', error);
            throw error;
        }
    }

    static async completeActivity(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/activities/${id}/complete`, {
                method: 'PUT'
            });
            return await response.json();
        } catch (error) {
            console.error('Error al completar actividad:', error);
            throw error;
        }
    }
}

// Gestión de Categorías
class CategoryManager {
    static async getAllCategories() {
        try {
            const response = await fetch(`${API_BASE_URL}/categories`);
            return await response.json();
        } catch (error) {
            console.error('Error al obtener categorías:', error);
            return [];
        }
    }

    static async createCategory(category) {
        try {
            const response = await fetch(`${API_BASE_URL}/categories`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            });
            return await response.json();
        } catch (error) {
            console.error('Error al crear categoría:', error);
            throw error;
        }
    }

    static async updateCategory(id, category) {
        try {
            const response = await fetch(`${API_BASE_URL}/categories/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(category)
            });
            return await response.json();
        } catch (error) {
            console.error('Error al actualizar categoría:', error);
            throw error;
        }
    }

    static async deleteCategory(id) {
        try {
            await fetch(`${API_BASE_URL}/categories/${id}`, {
                method: 'DELETE'
            });
        } catch (error) {
            console.error('Error al eliminar categoría:', error);
            throw error;
        }
    }
}

// UI Handlers
document.addEventListener('DOMContentLoaded', () => {
    // Cargar datos iniciales según la página actual
    const currentPage = window.location.pathname.split('/').pop();
    
    switch(currentPage) {
        case 'activities.html':
            loadActivities();
            setupActivityHandlers();
            break;
        case 'categories.html':
            loadCategories();
            setupCategoryHandlers();
            break;
        case 'completed.html':
            loadCompletedActivities();
            setupCompletedHandlers();
            break;
    }
});

// Handlers para Actividades
async function loadActivities() {
    const activities = await ActivityManager.getAllActivities();
    const tableBody = document.getElementById('activitiesTable');
    if (!tableBody) return;

    tableBody.innerHTML = activities
        .filter(activity => activity.status === 'pending')
        .map(activity => `
            <tr>
                <td>${activity.id}</td>
                <td>${activity.title}</td>
                <td>${activity.category.name}</td>
                <td>${formatDate(activity.date)}</td>
                <td>${activity.status}</td>
                <td>
                    <button class="btn btn-sm btn-success" onclick="completeActivity(${activity.id})">
                        Completar
                    </button>
                    <button class="btn btn-sm btn-primary" onclick="editActivity(${activity.id})">
                        Editar
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteActivity(${activity.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `).join('');
}

function setupActivityHandlers() {
    const saveButton = document.getElementById('saveActivity');
    if (saveButton) {
        saveButton.addEventListener('click', async () => {
            const form = document.getElementById('activityForm');
            const activity = {
                title: form.title.value,
                categoryId: form.category.value,
                date: form.date.value,
                description: form.description.value
            };

            try {
                await ActivityManager.createActivity(activity);
                loadActivities();
                bootstrap.Modal.getInstance(document.getElementById('activityModal')).hide();
                form.reset();
            } catch (error) {
                alert('Error al guardar la actividad');
            }
        });
    }
}

// Handlers para Categorías
async function loadCategories() {
    const categories = await CategoryManager.getAllCategories();
    const tableBody = document.getElementById('categoriesTable');
    if (!tableBody) return;

    tableBody.innerHTML = categories.map(category => `
        <tr>
            <td>${category.id}</td>
            <td>${category.name}</td>
            <td>${category.description}</td>
            <td>
                <span class="color-preview" style="background-color: ${category.color}"></span>
                ${category.color}
            </td>
            <td>
                <button class="btn btn-sm btn-primary" onclick="editCategory(${category.id})">
                    Editar
                </button>
                <button class="btn btn-sm btn-danger" onclick="deleteCategory(${category.id})">
                    Eliminar
                </button>
            </td>
        </tr>
    `).join('');
}

function setupCategoryHandlers() {
    const saveButton = document.getElementById('saveCategory');
    if (saveButton) {
        saveButton.addEventListener('click', async () => {
            const form = document.getElementById('categoryForm');
            const category = {
                name: form.name.value,
                description: form.description.value,
                color: form.color.value
            };

            try {
                await CategoryManager.createCategory(category);
                loadCategories();
                bootstrap.Modal.getInstance(document.getElementById('categoryModal')).hide();
                form.reset();
            } catch (error) {
                alert('Error al guardar la categoría');
            }
        });
    }
}

// Handlers para Actividades Completadas
async function loadCompletedActivities() {
    const activities = await ActivityManager.getAllActivities();
    const tableBody = document.getElementById('completedTable');
    if (!tableBody) return;

    tableBody.innerHTML = activities
        .filter(activity => activity.status === 'completed')
        .map(activity => `
            <tr>
                <td>${activity.id}</td>
                <td>${activity.title}</td>
                <td>${activity.category.name}</td>
                <td>${formatDate(activity.date)}</td>
                <td>${formatDate(activity.completedAt)}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="reopenActivity(${activity.id})">
                        Reabrir
                    </button>
                    <button class="btn btn-sm btn-danger" onclick="deleteActivity(${activity.id})">
                        Eliminar
                    </button>
                </td>
            </tr>
        `).join('');
}

function setupCompletedHandlers() {
    // Configurar filtros
    document.getElementById('filterAll')?.addEventListener('click', () => loadCompletedActivities());
    document.getElementById('filterToday')?.addEventListener('click', () => filterCompletedByDate('today'));
    document.getElementById('filterWeek')?.addEventListener('click', () => filterCompletedByDate('week'));
    document.getElementById('filterMonth')?.addEventListener('click', () => filterCompletedByDate('month'));
}

// Funciones auxiliares
async function completeActivity(id) {
    try {
        await ActivityManager.completeActivity(id);
        loadActivities();
    } catch (error) {
        alert('Error al completar la actividad');
    }
}

async function deleteActivity(id) {
    if (confirm('¿Está seguro de eliminar esta actividad?')) {
        try {
            await ActivityManager.deleteActivity(id);
            loadActivities();
            loadCompletedActivities();
        } catch (error) {
            alert('Error al eliminar la actividad');
        }
    }
}

async function deleteCategory(id) {
    if (confirm('¿Está seguro de eliminar esta categoría?')) {
        try {
            await CategoryManager.deleteCategory(id);
            loadCategories();
        } catch (error) {
            alert('Error al eliminar la categoría');
        }
    }
}

function filterCompletedByDate(filter) {
    const activities = document.querySelectorAll('#completedTable tr');
    const now = new Date();
    
    activities.forEach(row => {
        const dateCell = row.querySelector('td:nth-child(5)');
        if (!dateCell) return;
        
        const activityDate = new Date(dateCell.textContent);
        let show = false;

        switch(filter) {
            case 'today':
                show = activityDate.toDateString() === now.toDateString();
                break;
            case 'week':
                const weekAgo = new Date(now.setDate(now.getDate() - 7));
                show = activityDate >= weekAgo;
                break;
            case 'month':
                const monthAgo = new Date(now.setMonth(now.getMonth() - 1));
                show = activityDate >= monthAgo;
                break;
            default:
                show = true;
        }

        row.style.display = show ? '' : 'none';
    });
} 