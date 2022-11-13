
const { chai, server, should } = require("./testConfig");

describe("/GET get the wildfire data API test", () => {
    it("It should send validation error for Wildfire API as no query param is present", (done) => {
        chai.request(server)
            .get("/wildfires/ended")
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("message").eql("The month parameter cannot be empty");
                done();
            });
    });


    it("It should send validation error for Wildfire API as incorrect query param is present", (done) => {
        chai.request(server)
            .get("/wildfires/ended?month=ma&year=2020")
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("message").eql("The month parameter is invalid");
                done();
            });
    });

    it("It should send validation error for Wildfire API as incorrect query param is present", (done) => {
        chai.request(server)
            .get("/wildfires/ended?month=mar")
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("message").eql("The year parameter cannot be empty");
                done();
            });
    });

    it("It should send validation error for Wildfire API as incorrect query param is present", (done) => {
        chai.request(server)
            .get("/wildfires/ended?month=mar&year=202")
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("message").eql("The year parameter is invalid");
                done();
            });
    });

    it("It should send validation error for Wildfire API as incorrect query param is present", (done) => {
        chai.request(server)
            .get("/wildfires/ended?month=mar&year=20224")
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property("message").eql("The year parameter is invalid");
                done();
            });
    });
});