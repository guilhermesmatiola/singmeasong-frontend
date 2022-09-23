import { faker } from "@faker-js/faker"

const name =  faker.lorem.words(3);
const youtubeLink = "https://www.youtube.com/watch?v=OMOGaugKpzs"

const name2 =  faker.lorem.words(2);
const youtubeLink2 = "https://www.youtube.com/watch?v=djV11Xbc914"

const name3 =  faker.lorem.words(4);
const youtubeLink3 = "https://www.youtube.com/watch?v=17ozSeGw-fY"

const name4 = "funcionou!!!!"
const youtubeLink4 = "https://www.youtube.com/watch?v=yzZR9iCqUyk"

describe("HomePage: test in post/recommendation and get/recommendation", () => {

    it("Should Post Video", () => {
        cy.visit("http://localhost:3000");

        cy.request("POST", "http://localhost:4000/e2e/cleardatabase");


        cy.get("#name").type(`${name}`);
        cy.get("#youtubeLink").type(`${youtubeLink}`);

        cy.intercept("POST", "http://localhost:4000/recommendations").as(
            "postRecommendation"
        );
        cy.get("#submit").click();
        cy.wait("@postRecommendation");
        cy.contains(name);
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.contains("-5");
		cy.get("#urlname").should("contain.text", name);


        cy.get("#name").type(`${name2}`);
        cy.get("#youtubeLink").type(`${youtubeLink2}`);
        cy.intercept("POST", "http://localhost:4000/recommendations").as(
            "postRecommendation"
        );
        cy.get("#submit").click();
        cy.wait("@postRecommendation");
        cy.contains(name2);
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();


        cy.get("#name").type(`${name3}`);
        cy.get("#youtubeLink").type(`${youtubeLink3}`);
        cy.intercept("POST", "http://localhost:4000/recommendations").as(
            "postRecommendation"
        );
        cy.get("#submit").click();
        cy.wait("@postRecommendation");
        cy.contains(name3);
        cy.get("#upvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();
        cy.get("#downvote").click();


        
        cy.get("#name").type(`${name4}`);
        cy.get("#youtubeLink").type(`${youtubeLink4}`);
        cy.intercept("POST", "http://localhost:4000/recommendations").as(
            "postRecommendation"
        );
        cy.get("#submit").click();
        cy.wait("@postRecommendation");
        cy.contains(name4);
        cy.get("#upvote").click();
        cy.get("#upvote").click();
        cy.get("#upvote").click();
        cy.get("#upvote").click();
        cy.get("#upvote").click();
        cy.get("#upvote").click();
        cy.get("#upvote").click();        
        cy.contains("-5");
		cy.get("#urlname").should("contain.text", name4);

    })
})