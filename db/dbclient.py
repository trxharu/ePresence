from pymongo import MongoClient

def getDbInstance():
    client = MongoClient("mongodb://localhost:27017/")
    return client["epresencedb"]