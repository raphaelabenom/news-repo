
import database from "../../../../infra/database.js";

async function status(request, response) {
  const result = await database.query('SELECT NOW() as date');
  console.log(result.rows);
  response.status(200).json({ Chave : "valor" });

}

export default status;