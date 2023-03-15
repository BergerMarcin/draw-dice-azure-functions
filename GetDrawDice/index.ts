import { AzureFunction, Context, HttpRequest } from "@azure/functions";

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
  let response: Context["res"];

  try {
    const id: string = req.params.id;
    const drawDiceResult = Math.floor(Math.random() * parseInt(id)) + 1;
    context.log(`HTTP trigger "GetDrawDice" function for draw of dice ${id}. Draw result: ${drawDiceResult}`);
    response = { body: JSON.stringify({ value: drawDiceResult }), status: 200 };
  } catch (err) {
    response = { body: err.message, status: 500 };
  }
  context.res = response;
};

export default httpTrigger;
