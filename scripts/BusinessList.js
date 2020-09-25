import { useBusinesses, purchaserAgent, findPurchaser } from "./BusinessProvider.js";
import { newYorkBusiness, manufacturingBusinesses } from "./BusinessProvider.js";
import { businessHTML, newYorkBusinessesHTML, agentHTML } from "./Business.js";


const contentTarget = document.querySelector(".business");
const nyContentTarget = document.querySelector(".businessList--newYork");
const agentContentTarget = document.querySelector(".agents");

export const businessList = () => {
    const businessArray = useBusinesses();

    const newYorkBusinessHTML = "<h1>Active Businesses</h1>";
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += businessHTML(businessObject)
        }
    );
    newYorkBusinessHTML.innerHTML += `
        ${newYorkBusinessHTML}
    `
};