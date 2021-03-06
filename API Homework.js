{
    "info": {
        "_postman_id": "8f8d3968-37db-4c68-90fb-86ee12ebb8f5",
        "name": "API Homework",
        "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
    },
    "item": [{
            "name": "Upload file",
            "event": [{
                "listen": "test",
                "script": {
                    "exec": [
                        "if(pm.response.code === 200){\r",
                        "    pm.test(\"File created successfully\", function () {\r",
                        "        pm.response.to.have.status(200);\r",
                        "    });\r",
                        "\r",
                        "    } else {\r",
                        "        pm.test(\"File did not creat\", function () {\r",
                        "        console.log('File did not creat');\r",
                        "        });\r",
                        "    }"
                    ],
                    "type": "text/javascript"
                }
            }],
            "request": {
                "method": "POST",
                "header": [{
                        "key": "Authorization",
                        "value": "Bearer CPPB8UPk0osAAAAAAAAYL3jj0is7XQDTDIpvzO7jl0J0BYqr3bPlemDhBBl1WbkH"
                    },
                    {
                        "key": "Dropbox-API-Arg",
                        "value": "{\"mode\":\"add\",\"autorename\":true,\"mute\":false,\"path\":\"/KateVoloshinaHomework.txt\"}"
                    },
                    {
                        "key": "Content-Type",
                        "value": "application/octet-stream"
                    }
                ],
                "body": {
                    "mode": "file",
                    "file": {
                        "src": ""
                    }
                },
                "url": {
                    "raw": "https://content.dropboxapi.com/2/files/upload",
                    "protocol": "https",
                    "host": [
                        "content",
                        "dropboxapi",
                        "com"
                    ],
                    "path": [
                        "2",
                        "files",
                        "upload"
                    ]
                }
            },
            "response": []
        },
        {
            "name": "GetFileMetadata",
            "event": [{
                "listen": "test",
                "script": {
                    "exec": [
                        "if(pm.response.code === 200){\r",
                        "    pm.test(\"File got successfully\", function () {\r",
                        "        pm.response.to.have.status(200);\r",
                        "    });\r",
                        "\r",
                        "    } else {\r",
                        "        pm.test(\"File did not get\", function () {\r",
                        "        console.log('File did not get');\r",
                        "        });\r",
                        "    }"
                    ],
                    "type": "text/javascript"
                }
            }],
            "request": {
                "method": "POST",
                "header": [{
                        "key": "Content-Type",
                        "value": "application/json"
                    },
                    {
                        "key": "Authorization",
                        "value": "Bearer CPPB8UPk0osAAAAAAAAYL3jj0is7XQDTDIpvzO7jl0J0BYqr3bPlemDhBBl1WbkH"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{\n\t\"path\": \"/KateVoloshinaHomework.txt\"\n}"
                },
                "url": {
                    "raw": "https://api.dropboxapi.com/2/files/get_metadata",
                    "protocol": "https",
                    "host": [
                        "api",
                        "dropboxapi",
                        "com"
                    ],
                    "path": [
                        "2",
                        "files",
                        "get_metadata"
                    ]
                }
            },
            "response": []
        },
        {
            "name": "Delete File",
            "event": [{
                "listen": "test",
                "script": {
                    "exec": [
                        "if(pm.response.code === 200){\r",
                        "    pm.test(\"File deleted successfully\", function () {\r",
                        "        pm.response.to.have.status(200);\r",
                        "    });\r",
                        "\r",
                        "    } else {\r",
                        "        pm.test(\"File did not delete\", function () {\r",
                        "        console.log('File did not delete');\r",
                        "        });\r",
                        "    }"
                    ],
                    "type": "text/javascript"
                }
            }],
            "request": {
                "method": "POST",
                "header": [{
                        "key": "Authorization",
                        "value": "Bearer CPPB8UPk0osAAAAAAAAYL3jj0is7XQDTDIpvzO7jl0J0BYqr3bPlemDhBBl1WbkH"
                    },
                    {
                        "key": "Content-Type",
                        "value": "application/json"
                    }
                ],
                "body": {
                    "mode": "raw",
                    "raw": "{\n\t\"path\":\"/KateVoloshinaHomework.txt\"\n}"
                },
                "url": {
                    "raw": "https://api.dropboxapi.com/2/files/delete_v2",
                    "protocol": "https",
                    "host": [
                        "api",
                        "dropboxapi",
                        "com"
                    ],
                    "path": [
                        "2",
                        "files",
                        "delete_v2"
                    ]
                }
            },
            "response": []
        }
    ],
    "variable": [{
        "key": "baseUrl",
        "value": "http://petstore.swagger.io/v1",
        "type": "string"
    }]
}
