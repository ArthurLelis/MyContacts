const db = require('../../database');

class CategoriesRepository {
    async findAll(orderBy = 'ASC') {
        const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC';

        const rows = await db.query(`
            SELECT
                categories.*
            FROM categories
            ORDER BY categories.name ${direction}
        `);

        return rows;
    }

    async findById(id) {
        const [row] = await db.query(`
            SELECT
                categories.*
            FROM categories
            WHERE categories.id = $1`,
            [id]
        );

        return row;
    }

    async findByName(name) {
        const [row] = await db.query(`
                SELECT
                    categories.*
                FROM categories
                WHERE categories.name = $1`,
            [name]
        );

        return row;
    }

    async create({
        name
    }) {
        const [row] = await db.query(`
            INSERT INTO categories(name)
            VALUES ($1) RETURNING *`,
            [name]
        );

        return row;
    }

    async update(id, {
        name
    }) {
        const [row] = await db.query(`
            UPDATE categories
            SET name = $1
            WHERE categories.id = $2
            RETURNING *
        `, [name, id]);

        return row;
    }

    async delete(id) {
        const deleteOp = await db.query(`
            DELETE FROM categories
            WHERE categories.id = $1`,
            [id]
        );

        return deleteOp;
    }
}

module.exports = new CategoriesRepository();
