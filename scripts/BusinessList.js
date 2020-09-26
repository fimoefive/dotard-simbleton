import { useBusinesses, usepurchaserAgent, usemanufacturingBusinesses, useNewYorkBusinesses } from "./BusinessProvider.js";
import { businessmanufacturHTML, newYorkBusinessesHTML, agentHTML } from "./Business.js";

const nyContentTarget = document.querySelector(".businessList--newYork");
const manufacturingBusinessTarget = document.querySelector(".businessList--manufacturing");
const agentContentTarget = document.querySelector(".agents");


export const nyBusinessList = () => {
    const nyBusinessArray = useNewYorkBusinesses()

    nyContentTarget.innerHTML = "<h2>New York Businesses</h2>"

    nyBusinessArray.forEach(
        (business) => {
            nyContentTarget.innerHTML += newYorkBusinessesHTML(business)
        })
};

export const manufacturingBusList = () => {
    const manBusinessArray = usemanufacturingBusinesses();

    manufacturingBusinessTarget.innerHTML = "<h2>Manufacturing Businesses</h2>"

    manBusinessArray.forEach(
        (manBusiness) => {
            manufacturingBusinessTarget.innerHTML += businessmanufacturHTML(manBusiness)
        })
};

export const agentList = () => {
    const agentArray = usepurchaserAgent()

    agentContentTarget.innerHTML = "<h2>Purchasing Agents</h2>"

    agentArray.forEach(
        (agent) => {
            agentContentTarget.innerHTML += agentHTML(agent)
        })
};

export const findPurchaser = (name) => {
    return businesses.find(business => business.purchasingAgent.nameFirst.includes(name) || business.purchasingAgent.nameLast.includes(name))
};

// businesses.forEach( useBusiness => console.log(useBusiness));

// Place an article element in your HTML with the class below
const agentSearchResultArticle = document.querySelector(".foundPurchasers");

document
    .querySelector("#purchaserSearch")
    .addEventListener("keypress", keypressEvent => {
        if (clickEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

            // implement .find() method here
    const foundAgent = agentSearchResultArticle.find(agent => {
        const agents = agent.companyName.includes(keypressEvent.target.value)
        //  (agent.fullName.toLowerCase()
        // .includes(keypressEvent.target.value))
        return agents;
    })
            agentSearchResultArticle.innerHTML = `
                <h2>
                ${foundAgent.fullName}
                </h2>
                <section>
                ${foundAgent.companyName}
                </section>
                <section>
                ${foundAgent.phoneNumber}
                </section>
            `;
        }
    });

//     const allOfBusinesses = useBusinesses();
//     for (const business of allOfBusinesses) {
//         console.log(business)
//    };