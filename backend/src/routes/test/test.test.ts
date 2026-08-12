import { test } from 'node:test';
import assert from 'node:assert';
import Fastify from 'fastify';
import testRoutes from './test';
import { lcm } from './testService';

test('Test testRoutes API endpoint', async (t) => {
    const fastify = Fastify();
    fastify.register(testRoutes);

    await fastify.ready();

    await t.test('should return 400 for missing input', async () => {
        const response = await fastify.inject({
            method: 'GET',
            url: '/'
        });
        
        assert.strictEqual(response.statusCode, 400);
        assert.deepStrictEqual(JSON.parse(response.payload), { message: 'Invalid input' });
    });

    await t.test('should calculate LCM for normal numbers', async () => {
        const response = await fastify.inject({
            method: 'GET',
            url: '/?x=15&y=20'
        });
        
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(response.payload, '60');
    });

    await t.test('should calculate LCM for big numbers', async () => {
        const x = 999999n;
        const y = 888888n;
        const expectedLcm = lcm(x, y);

        const response = await fastify.inject({
            method: 'GET',
            url: `/?x=${x}&y=${y}`
        });
        
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(response.payload, expectedLcm.toString());
    });


    await t.test('should calculate LCM for very large numbers', async () => {
        const x = 2147483647n;
        const y = 67280421310721n;
        const expectedLcm = lcm(x, y);

        const response = await fastify.inject({
            method: 'GET',
            url: `/?x=${x}&y=${y}`
        });
        
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(response.payload, expectedLcm.toString());
    });

    await t.test('should return NaN for invalid numbers', async () => {
        const response = await fastify.inject({
            method: 'GET',
            url: '/?x=invalid&y=123'
        });
        
        assert.strictEqual(response.statusCode, 200);
        assert.strictEqual(response.payload, 'NaN'); 
    });
});
