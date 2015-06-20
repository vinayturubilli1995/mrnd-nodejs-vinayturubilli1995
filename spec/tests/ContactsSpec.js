
describe("Contacts Test Suite", function () {

    //var request = require('request');
    var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request')
    var base_url = "http://localhost:3000";
    var contacts_url = base_url + "/contacts";
    describe("hello world", function () {
        it("hello world", function (done) {
            request.get(base_url, function (error, response, body) {
                expect(response.statusCode).toBe(200);
                //expect(body).toBe("Hello World");
                done();
            });
        });
    });

 describe("create update contact", function () {
        var idCreated;
        it("should create contact", function (done) {
            var contact = new Object();
            contact.firstName = "jagan";
            contact.lastName = "peri";
            contact.phone = "23002300";
            console.log(JSON.stringify(contact));
            request.post({
                url: contacts_url,
                body: contact,
                json: true
            },
		    		    function (error, response, body) {
		    		        expect(response.statusCode).toBe(200);
		    		        console.log(body);
		    		        idCreated = body;
		    		        done();
		    		    });
        });
        it("should retrieve contact", function (done) {
            request.get({
                url: contacts_url + "/" + idCreated,
                json: true
            },
		    		    function (error, response, body) {

		    		        expect(response.statusCode).toBe(200);
		    		        console.log(body);
		    		        expect(body.firstName).toBe("jagan");
		    		        done();
		    		    });
        });
        it("should update contact", function (done) {

            var updatedContact = new Object();
            updatedContact.firstName = "jagan-updated";
            request.put({
                url: contacts_url + "/" + idCreated,
                body: updatedContact,
                json: true
            },
		    		    function (error, response, body) {

		    		        expect(response.statusCode).toBe(200);
		    		        console.log(body);
		    		        expect(body.firstName).toBe("jagan-updated");
		    		        expect(body.phone).toBe("23002300");
		    		        done();
		    		    });
        });
        it("should post message to contact", function (done) {
            var updatedContact = new Object();
            updatedContact.messages = "hello";
            request.post({
                url: contacts_url + "/" + idCreated,
                body: updatedContact,
                json: true
            },
		    		    function (error, response, body) {

		    		        expect(response.statusCode).toBe(200);
		    		        console.log(body);
		    		        expect(body).toBe(1);
		    		        done();
		    		    });

        });

        it("should get message for contact", function (done) {
            var updatedContact = new Object();
            request.get({
                url: contacts_url + "/messages" + "/" + idCreated,
                json: true
            },
		    		    function (error, response, body) {
		    		        expect(response.statusCode).toBe(200);
		    		        console.log(body);
		    		        expect(body[0]).toBe('hello');
		    		        done();
		    		    });

        });


    });

});
