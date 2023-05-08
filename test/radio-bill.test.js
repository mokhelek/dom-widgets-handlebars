describe("Testing The Radio-Bill Widget Factory Functions", function (){
    it( "Checking the set call amount", function (){
        let radioBillFunction = radioBill();
        

        assert.equal(2.75,radioBillFunction.getCallCost())
    })
    it( "Checking the set SMS amount", function (){
        let radioBillFunction = radioBill();
        

        assert.equal(0.75,radioBillFunction.getSMSCost())
    })
    it( "Checking the set warning level amount", function (){
        let radioBillFunction = radioBill();
        

        assert.equal(30.00,radioBillFunction.getSWarningLevel())
    })
    it( "Checking the set critical level amount", function (){
        let radioBillFunction = radioBill();
        

        assert.equal(50.00,radioBillFunction.getCriticalLevel())
    })
})



describe("Using The Set Values To Calculate The Radio-Bill Widget", function (){
    it("Calculate the total amount for 1 call", function (){
        let radioBillFunction = radioBill();


        radioBillFunction.makeCall()


        assert.equal(2.75, radioBillFunction.getTotalBillCost())
    })

    it("Calculate the total amount from 3 calls", function (){
        let radioBillFunction = radioBill();


        radioBillFunction.makeCall()
        radioBillFunction.makeCall()
        radioBillFunction.makeCall()


        assert.equal(8.25, radioBillFunction.getTotalBillCost())
    })

    it("Calculate the total amount from 1 sms", function (){
        let radioBillFunction = radioBill();
        

        radioBillFunction.makeSMS()


        assert.equal(0.75, radioBillFunction.getTotalBillCost())
    })

    it("Calculate the total amount from 3 sms", function (){
        let radioBillFunction = radioBill();
        

        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();


        assert.equal(2.25, radioBillFunction.getTotalBillCost())
    })

    it("Calculate the total amount for 3 sms and 2 calls", function (){
        let radioBillFunction = radioBill();
        

        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();


        assert.equal(7.75, radioBillFunction.getTotalBillCost())
    })

})


describe("Testing The Warning & Critical Level For Radio-Bill Widget", function (){
    it("It should return a class name of warning if warning level has been reached", function (){
        let radioBillFunction = radioBill();


        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        

        assert.equal(30,radioBillFunction.getSWarningLevel() );
        assert.equal(34.75,radioBillFunction.getTotalBillCost());
        assert.equal("warning",radioBillFunction.totalClassName());
    })

    it("It should return a class name of critical if critical level has been reached", function (){
        let radioBillFunction = radioBill();
      

        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        

        assert.equal(50,radioBillFunction.getCriticalLevel() );
        assert.equal(53,radioBillFunction.getTotalBillCost());
        assert.equal("critical",radioBillFunction.totalClassName());
    })
})

describe("Testing the totals for calls and for sms", function (){
    it("Should return 11 for 4 calls made", function (){
        let radioBillFunction = radioBill();

        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();


        assert.equal(11, radioBillFunction.getTotalCall() )
    })
    it("Should return 3.75 for 5 sms made", function (){
        let radioBillFunction = radioBill();


        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();


        assert.equal(3.75, radioBillFunction.getTotalSMS() )
    })

    it("Should return 3.75 for 5 sms made and 8.25 for 3 calls made", function (){
        let radioBillFunction = radioBill();


        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();
        radioBillFunction.makeSMS();
        radioBillFunction.makeCall();
        radioBillFunction.makeSMS();


        assert.equal(3.75, radioBillFunction.getTotalSMS() )
        assert.equal(8.25, radioBillFunction.getTotalCall() )
    })
})



