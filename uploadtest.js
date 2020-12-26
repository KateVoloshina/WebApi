if(pm.response.code === 200){
    pm.test("File created successfully", function () {
        pm.response.to.have.status(200);
    });

    } else {
        pm.test("File did not creat", function () {
        console.log('File did not creat');
        });
    }
