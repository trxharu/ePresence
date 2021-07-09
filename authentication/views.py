from django.http.response import HttpResponse
from db.dbclient import getDbInstance

from utils.jsonparser import parseJSON, JsonStringify
from utils.jsonwebtoken import generateToken, verifyToken
from utils.hash import generateHashedKey, validateHashedKey


# Create your views here.
def api(request):
    response = HttpResponse()
    response.headers = { "Content-Type": "application/json" }
    data = {
        "message": "Welcome to E-Presence API."
    }
    response.write(JsonStringify(data))
    return response

def signup(request):
    payload = parseJSON(request.body)

    hashedPass = generateHashedKey(payload["password"])

    user = {
        "email": payload["email"],
        "password": hashedPass 
    }

    users = getDbInstance().users
    userId = users.insert_one(user).inserted_id

    res = HttpResponse()
    res.headers = { "Content-Type": "application/json" }
    data = {
        "user_id": str(userId),
        "message": "User Inserted."
    }
    res.write(JsonStringify(data))
    return res

def login(request):
    payload = parseJSON(request.body)

    users_coll = getDbInstance().users
    user = users_coll.find_one({ "email": payload["email"]})

    checkedPass = validateHashedKey(payload["password"], user["password"])
    
    if checkedPass:
        token = generateToken({ "email": str(user["email"]) })
    else:
        token = None

    res = HttpResponse()
    res.headers = { "Content-Type": "application/json" }
    data = {
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
