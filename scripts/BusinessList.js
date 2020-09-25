import { useBusinesses, purchaserAgent, findPurchaser } from "./BusinessProvider.js";
import { newYorkBusiness, manufacturingBusinesses } from "./BusinessProvider.js";
import { Business } from "./Business.js";

const contentTarget = document.querySelector(".business");
const nyContentTarget = document.querySelector(".businessList--newYork");
const agentContentTarget = document.querySelector(".agents");



export const BusinessList = () => {
    const businessArray = useBusinesses();

    const newYorkBusinessHTML = "<h1>Active Businesses</h1>";
    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
    newYorkBusinessHTML.innerHTML += `
        ${newYorkBusinessHTML}
    `
};