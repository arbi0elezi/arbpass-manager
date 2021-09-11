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
                    type: 'string'
                }
            }
        }
    },
    preHandler: async (req, res) => {},
    handler: async (req, res) => {
        return {home: 'Home Controller'}
    }
};