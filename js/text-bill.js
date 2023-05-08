let textBillFactory = textBill();

function textAddBtnClicked() {
    let billItem = document.querySelector(".billTypeText").value.toLowerCase().trim() ;
    let textInputError =  document.querySelector("#textInputError");

    if(billItem == "call" || billItem == "sms" ){
        if(billItem == "call"  ){
            textBillFactory.billType("call");
        }
        if(billItem == "sms"){
            textBillFactory.billType("sms");
        }
    }else{
        textInputError.style.display = "block";
        setTimeout(() => {
            textInputError.style.display = "none";
        }, 3000);
    }

    displayTemplates();
}

function displayTemplates() {
    let templatePlaceHolder = document.querySelector(".textBillTotalsPlaceholder");
    let template = document.querySelector(".textBillTotalsTemplate").innerHTML;
    let compiledTemplate = Handlebars.compile(template);

    let total = {
        smsTotal: textBillFactory.getTotalSMS().toFixed(2),
        callTotal: textBillFactory.getTotalCall().toFixed(2),
        grandTotal: textBillFactory.getTotalBillCost().toFixed(2),
        classTotal: textBillFactory.totalClassName()
    };

    templatePlaceHolder.innerHTML = compiledTemplate(total);
}

const textAddBtn = document.querySelector(".textBillAddBtn");
textAddBtn.addEventListener("click", textAddBtnClicked);

function refreshTextInput(){
    textBillFactory.resetValues()
}
