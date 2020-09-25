
export const businessHTML = (businessObject) => {
    return `
        <section class="business">
            <h2 class="company__name">${businessObject.companyName}</h2>
            <div class="company__address">
                <p>Adress: ${businessObject.addressFullStreet}</p>
                <p>${businessObject.addressCity}, ${businessObject.addressStateCode}</p> 
                <p>${businessObject.addressZipCode}</p>
            </div>
        </section>
  `
};

export const newYorkBusinessesHTML = (businessObj) => {
    return `
        <section class="nybusiness">
            <h2 class="company__name">${businessObj.companyName}</h2>
            <div class="company__address">
                <p>Adress: ${businessObj.addressFullStreet}</p>
                <p>${businessObj.addressCity}, ${businessObj.addressStateCode}</p> 
                <p>${businessObj.addressZipCode}</p>
            </div>
        </section>
    `
};

export const agentHTML = (agentObj) => {
    return `
        <section class="agent">
            <h2 class="agent-name">${agentObj.fullName}</h2>
            <div class="agent-company">${agentObj.company}</div>
            <div class="agent-number">${agentObj.phoneNumber}</div>
        </section>
    `
};