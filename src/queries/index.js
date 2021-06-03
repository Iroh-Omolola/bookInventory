import client from '../database/index.js';

//CREATE
export const createBooks = async (req, res) => {
  try {
    
    const { Title, Author, ISBN } = req.body;
    
    const response = await client.query(`INSERT INTO bookInventory(Title, Author, ISBN) VALUES ($1, $2, $3)`, [Title, Author, ISBN]);

    if (response) {
      return res.status(200).json({ status: 'success', msg: 'User details posted successfully!'});
    }
  } catch (err) {
    console.log(err);
  }
};
//READ
export const getBooks = async (req, res) => {
  try {
    const response = await client.query('SELECT * FROM bookInventory ORDER BY id ASC');

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
};
//UPDATE
export const updateBooks = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { Title, Author, ISBN } = req.body;
      
    const response = await client.query('UPDATE bookInventory SET title = $1,  author = $2, isbn= $3 WHERE id = $4',
    [Title, Author, ISBN, id]);

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
};
//DELETE
export const deleteBooks = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
      
    const response = await client.query('DELETE FROM bookInventory WHERE id = $1', [id]);

    if (response) {
      return res.status(200).json({ status: 'success', data: response.rows });
    }
  } catch (err) {
    console.log(err);
  }
};
