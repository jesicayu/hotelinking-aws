const { lambdaHandler } = require("../app");

test('lambdaHandler returns successful response', async()=>{
    const currentTime = new Date().toLocaleTimeString();
    const context ={};
    const name = 'Jesica';
    const event = {
        queryStringParameters:{
            name: 'Jesica',
        }
    };
    const response = await lambdaHandler(event, context);
    expect(response.statusCode).toBe(200);
    expect(response.body).toBeDefined();
    expect(response.body).toContain(name);
    expect(response.body).toContain(currentTime);

})