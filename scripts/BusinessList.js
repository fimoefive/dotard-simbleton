import { useBusinesses, purchaserAgent, findPurchaser } from "./BusinessProvider.js";
import { newYorkBusiness, manufacturingBusinesses } from "./BusinessProvider.js";
import { businessmanufacturHTML, newYorkBusinessesHTML, agentHTML } from "./Business.js";


const contentTarget = document.querySelector(".business");
const nyContentTarget = document.querySelector(".businessList--newYork");
const agentContentTarget = document.querySelector(".agents");

export const businessList = () => {
    const businessArray = useBusinesses();

    const newYorkBusinessHTML = "<h1>Active Businesses</h1>";
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += businessmanufacturHTML(businessObject)
        }
    );
    newYorkBusinessHTML.innerHTML += `
        ${newYorkBusinessHTML}
    `
};

export const findPurchaser = (name) => {
    return businesses.find(business => business.purchasingAgent.nameFirst.includes(name) || business.purchasingAgent.nameLast.includes(name))
  };

// businesses.forEach( useBusiness => console.log(useBusiness));

// Place an article element in your HTML with the class below
const companySearchResultArticle = document.querySelector(".foundCompanies")

document
    .querySelector("#companySearch")
    .addEventListener("keypress", keyPressEvent => {
        if (keyPressEvent.charCode === 13) {
            /*
                When user presses enter, find the matching business.
                You can use the `.includes()` method strings to
                see if a smaller string is part of a larger string.

                Example:
                    business.companyName.includes(keyPressEvent.target.value)
            */

            const foundBusiness = // implement .find() method here

            companySearchResultArticle.innerHTML = `
                <h2>
                ${foundBusiness.companyName}
                </h2>
                <section>
                ${foundBusiness.addressFullStreet}

                </section>
                <section>
                ${foundBusiness.addressCity},
                ${foundBusiness.addressStateCode}
                ${foundBusiness.addressZipCode}
                </section>
            `;
        }
    });