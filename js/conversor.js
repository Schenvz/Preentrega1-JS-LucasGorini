const dolarAPI = require("dolar-api");

const apiKey = "API_KEY";

const getExchangeRate = async () => {
  const client = new dolarAPI.Client({
    apiKey,
  });

  const response = await client.getDolares();

  return response.dolar;
};

const convert = async (amount) => {
  const exchangeRate = await getExchangeRate();

  return amount / exchangeRate;
};

const app = () => {
  const [amount, setAmount] = useState(100);

  const convertedAmount = await convert(amount);

  return (
    <div>
      <input
        type="number"
        placeholder="Cantidad de pesos argentinos"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <p>
        {amount} pesos argentinos equivalen a {convertedAmount} dólares estadounidenses
      </p>
    </div>
  );
};

export default app;


const url = 'https://dolarapi.com/v1/dolares';
const options = {method: 'GET', headers: {Accept: 'application/json'}};

try {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
} catch (error) {
    console.error(error);
}
[
    {
      "compra": 0,
      "venta": 0,
      "casa": "string",
      "nombre": "string",
      "fechaActualizacion": "string"
    }
  ]