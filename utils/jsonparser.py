import json

def parseJSON(data):
    json_str = data.decode("utf8")
    return json.loads(json_str)

def JsonStringify(data):
    return json.dumps(data)