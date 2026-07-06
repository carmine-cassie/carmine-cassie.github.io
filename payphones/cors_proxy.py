# Because the payphones API doesn't allow Cross-Origin requests, we have this script!
# It'll run a couple times a day with a Github workflow
# It downloads and commits all the api files we'll need.

import requests
import json

payphones = requests.get("https://payphonetag.com/api/payphones")
if payphones.status_code == 200:
    with open("payphones/payphones.js", "wb") as file:
        file.write("payphones = ".encode())
        file.write(payphones.content)

    payphone_values = json.loads(payphones.content)
    
    for player_id in payphone_values["players"].keys():
        try:
            captures = requests.get(f"https://payphonetag.com/api/player/{player_id}/past-captures")
            if captures.status_code == 200:
                with open(f"payphones/past_captures/{player_id}.json", "wb") as file:
                    file.write(captures.content)
        except:
            print(f"Couldn't update {player_id}")

triangulation = requests.get("https://payphonetag.com/api/triangulation")
if triangulation.status_code == 200:
    with open("payphones/triangulation.js", "wb") as file:
        file.write("triangulation = ".encode())
        file.write(triangulation.content)

print("Done!")