const request = async (method, url, data) => {
    const options = {};

    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    const response = await fetch(url, options);

    try {
        const result = await response.json();

        return result;
    } catch (error) {
        return {};
    }
};

export const requestFactory = (token) => {
    return {
        get: request.bind(null, 'GET'),
        pos:  request.bind(null, 'POST'),
        put: request.bind(null, 'PUT'),
        patch: request.bind(null, 'PATCH'),
        del: request.bind(null, 'DELETE'),
    };
};


