const baseUrl = 'http://localhost:3030/jsonstore/users'

export default {
    async getAll() {
        const response = await fetch(baseUrl);
        const result = await response.json();
        const users = Object.values(result);

        return users;
    },
    async create(userData) {
        const response = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();

        return result;
    },
    async delete(selectedUser) {
        const response = await fetch(`${baseUrl}/${selectedUser._id}`, {
            method: 'DELETE',
        });
        
        if (response.ok) {
            return { ok: true };
        } else {
            return { ok: false, error: 'Failed to delete user' };
        }
    },
    async update(userData) {
        const response = await fetch(`${baseUrl}/${userData._id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(userData)
        });


        return response;
    }
}