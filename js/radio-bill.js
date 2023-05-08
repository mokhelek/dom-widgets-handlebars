let radioBillFactory = radioBill();

function radioAddBtnClicked() {
    let billItem = document.querySelector(".billItemTypeRadio:checked");
    let radioInputError =  document.querySelector(".radio-input-error");

    if(billItem != null ){
        if(billItem.value == "call"  ){
            radioBillFactory.makeCall();
        }
        if(billItem.value == "sms"){
            radioBillFactory.makeSMS();
        }
    }else{
        radioInputError.style.display = "block";
        setTimeout(() => {
            radioInputError.style.display = "none";
        }, 3000);
    }

    displayTemplates();
}

function displayTemplates() {
    let templatePlaceHolder = document.querySelector(".radioBillTotalsPlaceholder");
    let template = document.querySelector(".radioBillTotalsTemplate").innerHTML;
    let compiledTemplate = Handlebars.compile(template);

    let total = {
        smsTotal: radioBillFactory.getTotalSMS().toFixed(2),
        callTotal: radioBillFactory.getTotalCall().toFixed(2),
        grandTotal: radioBillFactory.getTotalBillCost().toFixed(2),
        classTotal: radioBillFactory.totalClassName()
    };

    templatePlaceHolder.innerHTML = compiledTemplate(total);
}

const radioAddBtn = document.querySelector(".radioBillAddBtn");
radioAddBtn.addEventListener("click", radioAddBtnClicked);

function refreshRadioInput() {
    radioBillFactory.resetValues()
}
