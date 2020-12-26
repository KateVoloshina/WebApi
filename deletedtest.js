if(pm.response.code === 200){
    pm.test("File deleted successfully", function () {
        pm.response.to.have.status(200);
    });

    } else {
        pm.test("File did not delete", function () {
        console.log('File did not delete');
        });
    }
