import { useBusinesses } from "./BusinessProvider.js"
const businessArrayCopy = useBusinesses();

export const findAgents = (input) => {
    return businessArrayCopy.find(business => business.companyName == input)
};