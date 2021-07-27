const db = require('./conn');

class CEOModel {
    constructor(id, name, slug, year) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.year = year;
    }

    static async getAll() {
        try {
            const response = await db.any(`SELECT * FROM apple_ceos;`);
            return response;
        } catch (error) {
            console.error('ERROR:', error.message);
            return error.message;
        }
    }

    static async getBySlug(slug) {
        try {
            const response = await db.one(
                `SELECT * FROM apple_ceos WHERE slug = '${slug}';`
            );
            return response;
        } catch (error) {
            console.error('ERROR:', error.message);
            return error.message;
        }
    }

    static async addEntry(name, slug, year) {
        try {
            const response = await db.result(
                `INSERT INTO apple_ceos (name, slug, year) VALUES ('${name}', '${slug}', ${year})`
            );
            return response;
        } catch (error) {
            console.log('ERROR:', error.message);
            return error.message;
        }
    }

    async deleteEntry() {
        try {
            const response = await db.result(
                `DELETE FROM apple_ceos WHERE id = $1`,
                [this.id]
            );
            return response;
        } catch (error) {
            console.log('ERROR:', error.message);
            return error.message;
        }
    }

    static async addEntry(name, slug, year) {
        const response = await db.result(`INSERT INTO apple_ceos (name, slug, year) VALUES ($1, $2, $3)`, [name, slug, year]);
        return response;
    }

    async deleteEntry() {
        const response = await db.result(`DELETE FROM apple_ceos WHERE id = $1`, [this.id]);
        return response
    }
}

module.exports = CEOModel;
