import bcrypt

# Function to generate hash of given data
def generateHashedKey(data):
    return bcrypt.hashpw(data.encode("utf-8"), bcrypt.gensalt())

# Function to verify hash of Data and HashedKey
def checkHashedKey(data, hashed):
    return bcrypt.checkpw(data.encode("utf-8"), hashed)
