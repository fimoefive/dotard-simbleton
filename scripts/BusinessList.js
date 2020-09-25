import { useBusinesses, purchaserAgentNames, findPurchaser } from "./BusinessProvider.js"
// import { maineBusiness, healthCareBusinesses } from "./BusinessProvider.js"
import { Business } from "./Business.js"


export const BusinessList = () => {
    const businessArray = useBusinesses();
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
};