import "core-js/stable";
import "regenerator-runtime/runtime";

export default {
    method: 'GET',
    url: '/',
    response: {
        200: {
            type: 'object',
            properties: {
                home: {
                    type: 'number'
                }
            }
        }
    },
    preHandler: async (req, res) => {},
    handler: async (req, res) => {
        debugger
        let x = 25;
        return {home: 'Home Controller' + x}
    }
};