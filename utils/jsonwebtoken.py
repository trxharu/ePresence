from jwcrypto import jwt, jwk

config = {"k": "EByZAjDb5EyYOVyJg2V23UcPN21ZkwtSWXXxbg5tWo4", "kty": "oct"}

def generateToken(payload):
    # Generating Key
    key = jwk.JWK(**config)
    Token = jwt.JWT(header={"alg": "HS256"},
        claims=payload)
    # Signing token with generated key.
    Token.make_signed_token(key)
    return Token.serialize()

def verifyToken(token):
    key = jwk.JWK(**config)
    SToken = jwt.JWT(key=key, jwt=token)
    
    return SToken.claims

