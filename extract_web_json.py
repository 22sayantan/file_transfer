import requests
import json

response = requests.get("https://data.montgomerycountymd.gov/api/views/v76h-r7br/rows.json")

response_json = json.loads(response.text)

# print(type(response_json))
with open('reatil_data.json','w') as f:
    json.dump(response_json,f)

f.close