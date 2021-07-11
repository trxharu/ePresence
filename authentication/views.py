from django.http.response import HttpResponse
from db.dbclient import getDbInstance

from utils.jsonparser import parseJSON, JsonStringify
from utils.jsonwebtoken import generateToken, verifyToken
from utils.hash import generateHashedKey, checkHashedKey


def signup(request):
    payload = parseJSON(request.body)
    res = HttpResponse()
    res.headers = { "Content-Type": "application/json" }
    # get users table or collection
    users = getDbInstance().users

    user = users.find_one({ "email": payload["email"] })
    
    if user != None:
        data = {
            "status": False,
            "message": "Email already exists."
        }
        res.write(JsonStringify(data))
        return res

    hashedPass = generateHashedKey(payload["password"])
    
    new_user = {
        "email": payload["email"],
        "password": hashedPass
    }
    
    inserted_id = users.insert_one(new_user).inserted_id
    
    token = generateToken({ "email": payload["email"] })
    data = {
        "status": True,
        "token": token,
        "message": "New User added."
    }
    res.write(JsonStringify(data))
    return res

def login(request):
    payload = parseJSON(request.body)
    res = HttpResponse()
    res.headers = { "Content-Type": "application/json" }

    users_coll = getDbInstance().users
    user = users_coll.find_one({ "email": payload["email"]})

    # Checking for user email
    if user == None:
        data = {
            "status": False,
            "message": "User email does not exists."
        }
        res.write(JsonStringify(data))
        return res
    
    checkedPass = checkHashedKey(payload["password"], user["password"])

    # Checking for password and generating token
    token = None
    
    if checkedPass:
        token = generateToken({ "email": str(user["email"]) })
    else:
        # if password incorrect return below response
        data = {
            "status": False,
            "user_email": str(user["email"]),
            "message": "Email or Password is incorrect."
        }
        res.write(JsonStringify(data))
        return res

    data = {
        "status": True,
        "user_email": str(user["email"]),
        "token": token,
        "message": "Login Successful."
    }

    res.write(JsonStringify(data))
    return res

def decodeToken(request):
    payload = parseJSON(request.body)
    decToken = verifyToken(payload["token"])
    return HttpResponse(decToken)
