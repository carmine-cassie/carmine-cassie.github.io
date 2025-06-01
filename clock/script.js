const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("minute-hand");
const sunTimesFace = document.getElementById("sun-times-face");

const sectorDay = document.getElementById("sector-day")
const sectorNight = document.getElementById("sector-night")
const sectorCDawn = document.getElementById("sector-c-dawn")
const sectorNDawn = document.getElementById("sector-n-dawn")
const sectorADawn = document.getElementById("sector-a-dawn")
const sectorCDusk = document.getElementById("sector-c-dusk")
const sectorNDusk = document.getElementById("sector-n-dusk")
const sectorADusk = document.getElementById("sector-a-dusk")

const spokeDay = document.getElementById("spoke-day")
const spokeNight = document.getElementById("spoke-night")
const spokeCDawn = document.getElementById("spoke-c-dawn")
const spokeNDawn = document.getElementById("spoke-n-dawn")
const spokeADawn = document.getElementById("spoke-a-dawn")
const spokeCDusk = document.getElementById("spoke-c-dusk")
const spokeNDusk = document.getElementById("spoke-n-dusk")
const spokeADusk = document.getElementById("spoke-a-dusk")

const spokeMidday = document.getElementById("spoke-midday")
const spokeMidnight = document.getElementById("spoke-midnight")

function timeToDegree(date) {
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    return 360 * (hh + (mm + ss/60)/60)/24;
}

function displayTime(){

    let date = new Date();

    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let hRotate = 180 - (15 * hh + 0.25 * mm);
    let mRotate = 6 * mm + 0.1 * ss;

    hourHand.style.transform = `rotate(${hRotate}deg)`;
    minuteHand.style.transform = `rotate(${mRotate}deg)`;
}

function degreeToPoint(cx, cy, cr, degree) {
    let x = Math.sin((degree * Math.PI) / 180.0)*cr + cx
    let y = Math.cos((degree * Math.PI) / 180.0)*cr + cy
    return [x, y]
}

function createSector(startDegree, endDegree) {
    let start = degreeToPoint(50, 50, 50, startDegree)
    let end = degreeToPoint(50, 50, 50, endDegree)
    return `M ${start[0]} ${start[1]} A 50 50 0 0 0 ${end[0]} ${end[1]} L 50 50`;
}

function createSpoke(degree) {
    let point = degreeToPoint(50, 50, 50, degree)
    return `M 50 50 L ${point[0]} ${point[1]}`
}

function daySectors() {
    let sunTimes = SunCalc.getTimes(new Date(), -33.8688, 151.2093, 3);
    
    let dayStart = ((timeToDegree(sunTimes.sunrise) + timeToDegree(sunTimes.sunriseEnd)) / 2);
    let cDawnStart = timeToDegree(sunTimes.dawn);
    let nDawnStart = timeToDegree(sunTimes.nauticalDawn);
    let aDawnStart = timeToDegree(sunTimes.nightEnd);
    let nightStart = timeToDegree(sunTimes.night);
    let aDuskStart = timeToDegree(sunTimes.nauticalDusk);
    let nDuskStart = timeToDegree(sunTimes.dusk);
    let cDuskStart = (timeToDegree(sunTimes.sunset) + timeToDegree(sunTimes.sunsetStart)) / 2;

    let midday = timeToDegree(sunTimes.solarNoon);
    let midnight = timeToDegree(sunTimes.nadir);

    sectorDay.setAttribute('d', createSector(dayStart, cDuskStart))
    sectorNight.setAttribute('d', createSector(nightStart, aDawnStart))
    sectorCDawn.setAttribute('d', createSector(cDawnStart, dayStart))
    sectorNDawn.setAttribute('d', createSector(nDawnStart, cDawnStart))
    sectorADawn.setAttribute('d', createSector(aDawnStart, nDawnStart))
    sectorCDusk.setAttribute('d', createSector(cDuskStart, nDuskStart))
    sectorNDusk.setAttribute('d', createSector(nDuskStart, aDuskStart))
    sectorADusk.setAttribute('d', createSector(aDuskStart, nightStart))

    spokeDay.setAttribute('d', createSpoke(dayStart))
    spokeNight.setAttribute('d', createSpoke(nightStart))
    spokeCDawn.setAttribute('d', createSpoke(cDawnStart))
    spokeNDawn.setAttribute('d', createSpoke(nDawnStart))
    spokeADawn.setAttribute('d', createSpoke(aDawnStart))
    spokeCDusk.setAttribute('d', createSpoke(cDuskStart))
    spokeNDusk.setAttribute('d', createSpoke(nDuskStart))
    spokeADusk.setAttribute('d', createSpoke(aDuskStart))

    spokeMidday.setAttribute('d', createSpoke(midday))
    spokeMidnight.setAttribute('d', createSpoke(midnight))
}

function moonPhase() {
    let moonPhase = SunCalc.getMoonIllumination(new Date())

    console.log(moonPhase.fraction)
}

daySectors()
moonPhase()
displayTime()
setInterval(displayTime, 50);