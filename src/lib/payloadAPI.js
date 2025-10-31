const PAYLOAD_API_URL = process.env.NEXT_PUBLIC_PAYLOAD_API || 'http://localhost:3000';

class PayloadAPI {
  constructor() {
    this.baseURL = PAYLOAD_API_URL;
  }

  async fetch(endpoint, options = {}) {
    const url = `${this.baseURL}/api${endpoint}`;
    
    const config = {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    };

    try {
      const response = await fetch(url, config);
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Payload API Error:', error);
      throw error;
    }
  }

  // Get semua item dari collection
  async getCollection(collection, params = {}) {
    const queryString = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {})
    ).toString();
    
    const endpoint = `/${collection}${queryString ? `?${queryString}` : ''}`;
    return this.fetch(endpoint);
  }

  // Get single item by ID
  async getItem(collection, id) {
    return this.fetch(`/${collection}/${id}`);
  }

  // Get single item by slug
  async getBySlug(collection, slug) {
    const data = await this.fetch(
      `/${collection}?where[slug][equals]=${slug}`
    );
    return data.docs?.[0] || null;
  }

  // Create item (memerlukan autentikasi)
  async createItem(collection, data, token) {
    return this.fetch(`/${collection}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }

  // Update item (memerlukan autentikasi)
  async updateItem(collection, id, data, token) {
    return this.fetch(`/${collection}/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
  }

  // Delete item (memerlukan autentikasi)
  async deleteItem(collection, id, token) {
    return this.fetch(`/${collection}/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  // Authentication
  async login(email, password) {
    return this.fetch('/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    });
  }

  async logout(token) {
    return this.fetch('/users/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  async me(token) {
    return this.fetch('/users/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}

export const payloadAPI = new PayloadAPI();

// Helper functions untuk projects
export async function getProjects(limit = 100) {
  const response = await payloadAPI.getCollection('projects', { 
    limit,
    sort: '-createdAt'
  });
  return response.docs;
}

export async function getProject(slug) {
  return payloadAPI.getBySlug('projects', slug);
}

export async function getProjectById(id) {
  return payloadAPI.getItem('projects', id);
}