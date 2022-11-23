# https://github.com/cypress-io/cypress-docker-images/tree/master/base

# pull image
FROM cypress/browsers:node16.13.0-chrome95-ff94
# make directory inside container
RUN mkdir /e2e
WORKDIR /e2e
# copy cypress code from host to container
COPY . /e2e
# execute the tests
RUN rm -rf node_modules && rm package-lock.json
RUN npm install
RUN npm run cy:run
# RUN npm run e2e_mochawesome