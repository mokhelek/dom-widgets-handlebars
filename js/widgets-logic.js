
// *********************************************  RADIO BILL FACTORY FUNCTION  ***************************************************

function radioBill(){
    let theCallCost = 2.75;
    let theSMSCost = 0.75;
    let theWarningLevel = 30.00;
    let theCriticalLevel = 50.00;

    let theTotalCall = 0.00;
    let theTotalSMS = 0.00;

    function getCallCost(){
        return theCallCost;
    }
    function getSMSCost(){
        return theSMSCost;
    }

    function getSWarningLevel(){
        return theWarningLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }
   
    function makeCall(){
        theTotalCall = theTotalCall + theCallCost;
    }
    function makeSMS(){
        theTotalSMS = theTotalSMS + theSMSCost;
    }

    function getTotalBillCost(){
        return theTotalCall + theTotalSMS;
    }




    function getWarningLevel(){
        return theWarningLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function criticalLevelReached(){
        return getTotalBillCost() >= getCriticalLevel();
    }
    function warningLevelReached(){
        return getTotalBillCost() >= getWarningLevel();
    }

    function totalClassName() {
        if (criticalLevelReached()) {
          return "critical";
        }
        if (getTotalBillCost() >= getWarningLevel()) {
          return "warning";
        }
        if( getTotalBillCost() < getWarningLevel() ){
            return "normal";
        }
    }


    function getTotalCall(){
        return theTotalCall ;
    }
    function getTotalSMS(){
        return theTotalSMS ;
    }
    function resetValues(){
        theTotalCall = 0.00 ;
        theTotalSMS = 0.00 ;
        location.reload();
    }


    return {
        getCallCost,
        getSMSCost,
        getSWarningLevel,
        getCriticalLevel,
        getTotalBillCost,
        totalClassName, 
        makeCall,
        makeSMS,

        getTotalCall,
        getTotalSMS,
        resetValues,
        
    }

}

// *********************************************  TEXT BILL FACTORY FUNCTION  ***************************************************


function textBill(){
    let theCallCost = 2.75;
    let theSMSCost = 0.75;
    let theWarningLevel = 30.00;
    let theCriticalLevel = 50.00;


    let theTotalCall = 0.00;
    let theTotalSMS = 0.00;


    function getCallCost(){
        return theCallCost;
    }
    function getSMSCost(){
        return theSMSCost;
    }



    function getSWarningLevel(){
        return theWarningLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function billType(billType){
        if(billType.toLowerCase().trim() === "call"){
            theTotalCall += theCallCost;
        }else if (billType.toLowerCase().trim() === "sms"){
            theTotalSMS += theSMSCost;
        }
    }
    
    function getTotalBillCost(){
        return theTotalCall + theTotalSMS ;
    }


    function getWarningLevel(){
        return theWarningLevel;
    }

    function getCriticalLevel(){
        return theCriticalLevel;
    }

    function criticalLevelReached(){
        return getTotalBillCost() >= getCriticalLevel();
    }
    function warningLevelReached(){
        return getTotalBillCost() >= getWarningLevel();
    }

    function totalClassName() {
        if (criticalLevelReached()) {
          return "critical";
        }
        if (getTotalBillCost() >= getWarningLevel()) {
          return "warning";
        }
        if( getTotalBillCost() < getWarningLevel() ){
            return "normal";
        }
    }


    function getTotalCall(){
        return theTotalCall ;
    }
    function getTotalSMS(){
        return theTotalSMS ;
    }
    function resetValues(){
        theTotalCall = 0.00 ;
        theTotalSMS = 0.00 ;
        location.reload();
    }


    return {
        getCallCost,
        getSMSCost,
        getSWarningLevel,
        getCriticalLevel,
        billType,
        getTotalBillCost,
        totalClassName, 

        getTotalCall,
        getTotalSMS,
    }
}