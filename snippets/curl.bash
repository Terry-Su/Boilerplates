curl --data "UserName=user1&Pwd=test" http://localhost:8090/Register
curl -X POST -H "Content-Type: application/json" -d '{UserName: "user1", Pwd: "test"}' http://localhost:8090/Register