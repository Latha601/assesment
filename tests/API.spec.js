import { test, expect } from '@playwright/test';

test('API Test - Create, Get, Update User', async ({ request }) => {
    const createResponse = await request.post('https://reqres.in/api/users', {
        headers: { 'Content-Type': 'application/json',
            "x-api-key": "reqres-free-v1"
         },
        data: {
            name: 'Latha',
            job: 'QA Engineer'
        }
    });
    expect(createResponse.status()).toBe(201);
    const createData = await createResponse.json();
    const userId = createData.id;
    expect(userId).toBeTruthy();
    const getResponse = await request.get(`https://reqres.in/api/users/${userId}`);
    console.log('Get Response Status:', getResponse.status());
    if (getResponse.status() === 200) {
        const getData = await getResponse.json();
        console.log('Fetched User:', getData);
        expect(getData.data || getData).toBeTruthy();
    } else {
        console.log('User not found (reqres mock API does not persist data).');
    }
    const updateResponse = await request.put(`https://reqres.in/api/users/${userId}`, {
        headers: { 'Content-Type': 'application/json',
            "x-api-key": "reqres-free-v1"
         },
        data: {
            name: 'Latha Updated',
            job: 'Senior QA'
        }
    });
    expect(updateResponse.status()).toBe(200);
    const updateData = await updateResponse.json();
    console.log('User Updated:', updateData);
    expect(updateData.name).toBe('Latha Updated');
});
