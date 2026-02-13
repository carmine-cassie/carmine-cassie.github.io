import json

def hour_min_sec(sign, hours, mins, seconds):
    result = int(hours) + (int(mins) / 60) + (float(seconds) / 3600)
    if sign == '-':
        result *= -1
    return "{:.5f}".format(result)


with open('bsc5p_extra.json') as stars_file:
    with open('bsc5p_spectral_extra.json') as spectral_file:
        stars = json.load(stars_file)
        spectral = json.load(spectral_file)
        output = []

        for star in stars:
            mag = star['visualMagnitude']
            if mag and float(mag) < 4:
                output.append({
                    'id': star['lineNumber'],
                    'name': star['bayerAndOrFlamsteed'],
                    'ra': hour_min_sec(
                        '+',
                        star['hoursRaJ2000'],
                        star['minutesRaJ2000'],
                        star['secondsRaJ2000'],
                    ),
                    'dec': hour_min_sec(
                        star['signDecJ2000'],
                        star['degreesDecJ2000'],
                        star['minutesDecJ2000'],
                        star['secondsDecJ2000'],
                    ),
                    'mag': star['visualMagnitude'],
                    'color': [entry['g'] for entry in spectral if entry['i'] == int(star['lineNumber'])][0]
                })
        with open('stars.min.js', 'w') as outputFile:
            outputFile.write("const stars = ")
            json.dump(output, outputFile, separators=(',', ':'))