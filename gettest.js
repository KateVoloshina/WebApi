if(pm.response.code === 200){
    pm.test("File got successfully", function () {
        pm.response.to.have.status(200);
    });

    } else {
        pm.test("File did not get", function () {
        console.log('File did not get');
        });
    }
