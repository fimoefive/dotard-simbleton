
export const businessmanufacturHTML = (businessObject) => {
    return `
        <section class="business">
            <h2 class="company-name">${businessObject.companyName}</h2>
            <div class="company-address">
                <p>Adress: ${businessObject.addressFullStreet}</p>
                <p>${businessObject.addressCity}, ${businessObject.addressStateCode}</p> 
                <p>${businessObject.addressZipCode}</p>
            </div>
        </section>
  `
};

export const newYorkBusinessesHTML = (businessObj) => {
    return `
        <section class="businessList--newYork">
            <h2 class="company-name">${businessObj.companyName}</h2>
            <div class="company-address">
                <p>Adress: ${businessObj.addressFullStreet}</p>
                <p>${businessObj.addressCity}, ${businessObj.addressStateCode}</p> 
                <p>${businessObj.addressZipCode}</p>
            </div>
        </section>
    `
};

export const agentHTML = (agentObj) => {
    return `
        <section class="agents">
            <h2 class="agent-name">${agentObj.fullName}</h2>
            <div class="agent-company">${agentObj.company}</div>
            <div class="agent-phone">${agentObj.phoneNumber}</div>
        </section>
    `
};