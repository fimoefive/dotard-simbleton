import { useBusinesses, usepurchaserAgent, usemanufacturingBusinesses, useNewYorkBusinesses } from "./BusinessProvider.js";
import { businessmanufacturHTML, newYorkBusinessesHTML, agentHTML } from "./Business.js";

const nyContentTarget = document.querySelector(".businessList--newYork");
const manufacturingBusinessTarget = document.querySelector(".businessList--manufacturing");
const agentContentTarget = document.querySelector(".agents");

export const BusinessList = () => {
    const businessArray = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"
    businessArray.forEach((businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    )};

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

// export const findPurchaser = (name) => {
//     return businesses.find(business => business.purchasingAgent.nameFirst.includes(name) || business.purchasingAgent.nameLast.includes(name))
// };

// businesses.forEach( useBusiness => console.log(useBusiness));
const agentSearchTarget = document.querySelector(".foundPurchasers");

document
    .querySelector("#purchaserSearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            

        //     const allOfBusinesses = useBusinesses()
        //     for (const business of allOfBusinesses) {
        //         const agentSearch = business.companyName.includes(keyPressEvent.target.value);
        //     if (agentSearch) {
        //         agentSearchTarget.innerHTML += `${agentHTML(agent)}`
        //     }
        //    };
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.
                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */// implement .find() method here
            const businessCopy = useBusinesses();
    const findAgent = (input) => {
        return businessCopy.find(business => business.companyName.includes(input))
    }
    const inputField = document.getElementById("agentSearch")
    const userInput = inputField.value
    let foundAgent = findBusiness(userInput)

     //makes other lists disappear when a search is run.
     if(foundAgent) {
        const hideTargets = document.querySelector(".lists");
        hideTargets.style.display = "none";
    }
    // const foundAgent = foundAgentArray.find(business => {
    //     //  (agent.fullName.toLowerCase()
    //     // .includes(keypressEvent.target.value))
    //     return agents;
    // })
            agentSearchTarget.innerHTML = `
            <h2>Results</h2>    
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