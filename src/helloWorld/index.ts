export const helloWorld = async (event: any, context: any) => {
  const name = event?.queryStringParameters?.name || 'World';

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello ${name}!`
    })
  };
};
