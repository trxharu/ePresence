import bcrypt

# Function to generate hash of given data
def generateHashedKey(data):
    hashedKey = bcrypt.hashpw(
        data.encode(),
        bcrypt.gensalt()
    )
    return hashedKey

# Function to verify hash of Data and HashedKey
def validateHashedKey(data, hashedKey):
    validateKey = bcrypt.checkpw(
        data.encode(), 
        hashedKey
    )
    return validateKey
