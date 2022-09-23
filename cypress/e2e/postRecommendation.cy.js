import {faker} from "@faker-js/faker"
import  {recommendationFactory} from "../factories/recommendFactory.js"

describe('Test on post reccommendation', () => {

  it('Test on post new reccommendation',async () => {

    const reccommendation = await recommendationFactory();

    cy.visit('http://localhost:3000/')

    cy.get('#name').type(reccommendation.name);
    cy.get('#youtubeLink').type(reccommendation.youtubeLink);
    cy.intercept("POST", "http://localhost:5000/recommendations").as("insert");
    cy.get('#submit').click();
    cy.wait("@insert");
  })

})