export const Business = (businessObject) => {
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