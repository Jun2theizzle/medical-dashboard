# medical-dashboard
Application simulating basic online medical platform functionality

# to run 

`docker-compose build && docker-compose up -d`

# to test
1. cd to the 'api' directory
2. `npm install` should also install the testing modules
3. `npm test` will run the unit tests

The test comprises of both negative and postive tests. The 'should mock the response from fakeDb' tests mocks the response from the 'fakeDb' we have for getting our medical visits. 

# app flow

1. Click login
2. Type in any user name
3. Click on any of the visits for more information
4. Visits with the 'red' timestamp are unpaid for
5. Click on those and then the 'paid' button to pay for them

