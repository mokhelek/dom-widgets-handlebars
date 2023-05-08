let textBillFactory = textBill();

function textAddBtnClicked() {
    let billItem = document.querySelector(".billTypeText");
    let radioInputError =  document.querySelector(".radio-input-error");
    
    if(billItem != null ){
        if(billItem.textContent == "call"  ){
            textBillFactory.billType("call");
        }
        if(billItem.textContent == "sms"){
            textBillFactory.billType("sms");
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
    let templatePlaceHolder2 = document.querySelector(".templateData");
    let template2 = document.querySelector(".totalsTemplate").innerHTML;
    let compiledTemplate2 = Handlebars.compile(template2);

    let total = {
        smsTotal: 25,
        callTotal: textBillFactory.getTotalCall().toFixed(2),
        grandTotal: textBillFactory.getTotalBillCost().toFixed(2),
        classTotal: textBillFactory.totalClassName()
    };

    templatePlaceHolder2.innerHTML = compiledTemplate2(total);
}

const textAddBtn = document.querySelector(".textBillAddBtn");
textAddBtn.addEventListener("click", textAddBtnClicked);

function refreshRadioInput() {
    textBillFactory.resetValues()
}
