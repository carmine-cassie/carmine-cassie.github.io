const latitude = -33.8688;
const longitude = 151.2093;
const elevation = 3;

let globalPhase = 0;

let date = new Date();

const clock = document.getElementById("clock")

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

const moonShadow = document.getElementById("moon-shadow")

const sunSky = document.getElementById("sun-sky")
const moonSky = document.getElementById("moon-sky")
const mercurySky = document.getElementById("mercury-sky")
const venusSky = document.getElementById("venus-sky")
const marsSky = document.getElementById("mars-sky")
const jupiterSky = document.getElementById("jupiter-sky")
const saturnSky = document.getElementById("saturn-sky")

const normalYear = document.getElementById("normal-year")
const solstice = document.getElementById("solstice")

function degMinSec(degrees, minutes, seconds) {
    return degrees + (minutes / 60) + (seconds / 3600)
}

// const stars = [
//     {
//         name: "crus-a",
//         magnitude: 0.76,
//         ra: degMinSec(12, 26, 35.89522),
//         dec: degMinSec(-63, 5, 56.7343)
//     },
//     {
//         name: "crucis-b",
//         magnitude: 1.25,
//         ra: degMinSec(12, 47, 43.26877),
//         dec: degMinSec(-59, 41, 19.5792)
//     },
//     {
//         name: "crucis-c",
//         magnitude: 1.64,
//         ra: degMinSec(12, 31, 9.960),
//         dec: degMinSec(-57, 6, 47.57)
//     },
//     {
//         name: "crucis-d",
//         magnitude: 2.81,
//         ra: degMinSec(12, 15, 8.71673),
//         dec: degMinSec(-58, 44, 56.1369)
//     },
//     {
//         name: "centauri-a",
//         magnitude: -0.27,
//         ra: degMinSec(14, 39, 36),
//         dec: degMinSec(-60, 50, 10)
//     },
//     {
//         name: "centauri-b",
//         magnitude: 0.61,
//         ra: degMinSec(14, 3, 49.40535),
//         dec: degMinSec(-60, 22, 22.9266)
//     }
// ]

function timeToDegree(date) {
    date = new Date(date)
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    return 360 * (hh + (mm + ss/60)/60)/24;
}

// TODO consider leap years
function dateToDegree(newDate) {
    return (newDate - date) / 86400000;
}

function displayTime(){
    let localDate = new Date(date)

    let hh = localDate.getHours();
    let mm = localDate.getMinutes();
    let ss = localDate.getSeconds();

    let hRotate = 180 + (15 * hh + 0.25 * mm);
    let mRotate = 6 * mm + 0.1 * ss;

    hourHand.style.transform = `rotate(${hRotate}deg)`;
    minuteHand.style.transform = `rotate(${mRotate}deg)`;
}

function degreeToPointAntiClockwise(cx, cy, cr, degree) {
    let x = Math.sin((degree * Math.PI) / 180.0)*cr + cx
    let y = Math.cos((degree * Math.PI) / 180.0)*cr + cy
    return {x: x, y: y}
}

function degreeToPointClockwise(cx, cy, cr, degree) {
    let x = -Math.sin((degree * Math.PI) / 180.0)*cr + cx
    let y = Math.cos((degree * Math.PI) / 180.0)*cr + cy
    return {x: x, y: y}
}

function createSector(startDegree, endDegree) {
    startDegree = timeToDegree(startDegree.date)
    endDegree = timeToDegree(endDegree.date)

    // Todo add a case for start equals end

    while (endDegree < startDegree) {
        endDegree += 360;
    }

    let long = 0;

    if (endDegree - startDegree > 180) {
        long = 1;
    }

    let start = degreeToPointClockwise(50, 50, 50, startDegree)
    let end = degreeToPointClockwise(50, 50, 50, endDegree)
    return `M ${end.x} ${end.y} A 50 50 0 ${long} 0 ${start.x} ${start.y} L 50 50`;
}

function createMoon(phase) {
    let x = Math.cos(phase * Math.PI / 180) * 50

    
    // TODO if we're close to a phase, snap to it and edge case it
    // as is we might get 4 frames a month of zero division errors
    let a;
    let b;
    if (phase < 90) {
        a = 1;
        b = 1;
    } else if (phase < 180) {
        a = 0;
        b = 1;
    } else if (phase < 270) {
        a = 1;
        b = 0;
    } else {
        a = 0;
        b = 0;
    }
    return `M 50 0 A ${x} 50 0 0 ${a} 50 100 A 50 50 0 0 ${b} 50 0`
}

function createSpoke(date) {
    let degree = timeToDegree(date.date)
    let point = degreeToPointClockwise(50, 50, 50, degree)
    return `M 50 50 L ${point.x} ${point.y}`
}

function daySectors() {
    let observer = new Astronomy.Observer(latitude, longitude, elevation)
    
    let midday = Astronomy.SearchHourAngle('Sun', observer, 0, date, 1);
    let midnight = Astronomy.SearchHourAngle('Sun', observer, 12, date, 1);

    let sunHigh = midday.hor.altitude;
    let sunLow = midnight.hor.altitude;

    midday = midday.time;
    midnight = midnight.time;

    let longDay = 0;
    let longNight = 0;

    if (sunLow > -0.75) { longDay = 4; }
    else if (sunLow > -6.75) { longDay = 3; }
    else if (sunLow > -12.75) { longDay = 2; }
    else if (sunLow > -18.75) { longDay = 1; }

    if (sunHigh < -17.25) { longNight = 4; }
    else if (sunHigh < -11.15) { longNight = 3; }
    else if (sunHigh < -5.25) { longNight = 2; }
    else if (sunHigh < 0.75) { longNight = 1; }

    let dayStart = Astronomy.SearchAltitude('Sun', observer, +1, date, 1, 0)
    let cDuskStart = Astronomy.SearchAltitude('Sun', observer, -1, date, 1, 0)
    let cDawnStart = Astronomy.SearchAltitude('Sun', observer, +1, date, 1, -6)
    let nDuskStart = Astronomy.SearchAltitude('Sun', observer, -1, date, 1, -6)
    let nDawnStart = Astronomy.SearchAltitude('Sun', observer, +1, date, 1, -12)
    let aDuskStart = Astronomy.SearchAltitude('Sun', observer, -1, date, 1, -12)
    let aDawnStart = Astronomy.SearchAltitude('Sun', observer, +1, date, 1, -18)
    let nightStart = Astronomy.SearchAltitude('Sun', observer, -1, date, 1, -18)

    let dayEnd = cDuskStart;
    let cDuskEnd = nDuskStart;
    let cDawnEnd = dayStart;
    let nDuskEnd = aDuskStart;
    let nDawnEnd = cDawnStart;
    let aDuskEnd = nightStart;
    let aDawnEnd = nDawnStart;
    let nightEnd = aDawnStart;

    if (longDay >= 1) {
        nightStart = midnight;
        nightEnd = midnight;
        aDawnStart = aDuskStart;
        aDuskStart = midnight;
        aDuskEnd = midnight;
    } if (longDay >= 2) {
        aDawnStart = midnight;
        aDawnEnd = midnight;
        nDawnStart = nDuskStart;
        nDuskStart = midnight;
        nDuskEnd = midnight;
    } if (longDay >= 3) {
        nDawnStart = midnight;
        nDawnEnd = midnight;
        cDawnStart = cDuskStart;
        cDuskStart = midnight;
        cDuskEnd = midnight;
    } if (longDay >= 4) {
        cDawnStart = midnight;
        cDawnEnd = midnight;
        dayStart = midday;
        dayEnd = midday;
        sunTimesFace.style.setProperty("background", "#dceaff")
    }

    if (longNight >= 1) {
        dayStart = midday;
        dayEnd = midday;
        cDawnEnd = cDuskEnd;
        cDuskStart = midday;
        cDuskEnd = midday;
    } if (longNight >= 2) {
        cDawnStart = midday;
        cDawnEnd = midday;
        nDawnEnd = nDuskEnd;
        nDuskStart = midday;
        nDuskEnd = midday;
    } if (longNight >= 3) {
        nDawnStart = midday;
        nDawnEnd = midday;
        aDawnEnd = aDuskEnd;
        aDuskStart = midday;
        aDuskEnd = midday;
    } if (longNight >= 4) {
        aDawnStart = midday;
        aDawnEnd = midday;
        nightStart = midnight;
        nightEnd = midnight;
        sunTimesFace.style.setProperty("background", "#192029")
    }

    sectorDay.setAttribute('d', createSector(dayStart, dayEnd))
    spokeDay.setAttribute('d', createSpoke(dayStart))

    sectorNight.setAttribute('d', createSector(nightStart, nightEnd))
    spokeNight.setAttribute('d', createSpoke(nightStart))

    sectorCDawn.setAttribute('d', createSector(cDawnStart, cDawnEnd))
    sectorCDusk.setAttribute('d', createSector(cDuskStart, cDuskEnd))
    spokeCDawn.setAttribute('d', createSpoke(cDawnStart))
    spokeCDusk.setAttribute('d', createSpoke(cDuskStart))

    sectorNDawn.setAttribute('d', createSector(nDawnStart, nDawnEnd))
    sectorNDusk.setAttribute('d', createSector(nDuskStart, nDuskEnd))
    spokeNDawn.setAttribute('d', createSpoke(nDawnStart))
    spokeNDusk.setAttribute('d', createSpoke(nDuskStart))

    sectorADawn.setAttribute('d', createSector(aDawnStart, aDawnEnd))
    sectorADusk.setAttribute('d', createSector(aDuskStart, aDuskEnd))
    spokeADawn.setAttribute('d', createSpoke(aDawnStart))
    spokeADusk.setAttribute('d', createSpoke(aDuskStart))

    spokeMidday.setAttribute('d', createSpoke(midday))
    spokeMidnight.setAttribute('d', createSpoke(midnight))
}

function moonPhase() {
    let phase = Astronomy.MoonPhase(date)
    moonShadow.setAttribute('d', createMoon(phase))
}

function calculateAltitude(altitude) {
    return altitude * -((300-80)/300) / 90.0 + 1
}

function skyPos(ra, dec) {
    let observer = new Astronomy.Observer(latitude, longitude, elevation)
    
    bodyHor = Astronomy.Horizon(date, observer, ra, dec, "normal")
    
    let visualAltitude = calculateAltitude(Math.max(-50, bodyHor.altitude))
    
    let x = -Math.sin(bodyHor.azimuth * Math.PI / 180.0) * visualAltitude * 0.5 + 0.5
    let y = -Math.cos(bodyHor.azimuth * Math.PI / 180.0) * visualAltitude * 0.5 + 0.5
    
    return {x: x, y: y, az: bodyHor.azimuth}
}

function celestialPos(body) {
    let observer = new Astronomy.Observer(latitude, longitude, elevation)
    let bodyEqu = Astronomy.Equator(body, date, observer, true, true)
    return skyPos(bodyEqu.ra, bodyEqu.dec)
}

function celestialBodies() {
    let sun = celestialPos("Sun")
    sunSky.style.setProperty('--x', sun.x)
    sunSky.style.setProperty('--y', sun.y)
    sunSky.style.setProperty('--az', sun.az)

    let moon = celestialPos("Moon")
    moonSky.style.setProperty('--x', moon.x)
    moonSky.style.setProperty('--y', moon.y)
    moonSky.style.setProperty('--az', moon.az)

    let mercury = celestialPos("Mercury")
    mercurySky.style.setProperty('--x', mercury.x)
    mercurySky.style.setProperty('--y', mercury.y)
    mercurySky.style.setProperty('--az', mercury.az)

    let venus = celestialPos("Venus")
    venusSky.style.setProperty('--x', venus.x)
    venusSky.style.setProperty('--y', venus.y)
    venusSky.style.setProperty('--az', venus.az)

    let mars = celestialPos("Mars")
    marsSky.style.setProperty('--x', mars.x)
    marsSky.style.setProperty('--y', mars.y)
    marsSky.style.setProperty('--az', mars.az)

    let jupiter = celestialPos("Jupiter")
    jupiterSky.style.setProperty('--x', jupiter.x)
    jupiterSky.style.setProperty('--y', jupiter.y)
    jupiterSky.style.setProperty('--az', jupiter.az)

    let saturn = celestialPos("Saturn")
    saturnSky.style.setProperty('--x', saturn.x)
    saturnSky.style.setProperty('--y', saturn.y)
    saturnSky.style.setProperty('--az', saturn.az)

    stars.forEach((star) => {
        let starElement = document.getElementById(star.id)
        starElement.style.setProperty('--size', "calc(var(--scale) * " + (4 - star.mag) + "px)")
        starElement.style.setProperty('--color', star.color)
        let starCoords = skyPos(parseFloat(star.ra), parseFloat(star.dec))
        starElement.style.setProperty('--x', starCoords.x)
        starElement.style.setProperty('--y', starCoords.y)
        starElement.style.setProperty('--az', starCoords.az)
    });
}

function squish(angle) {
    angle = ((angle + 180) % 360 - 180) / 180// * Math.PI / 360;
    if (angle >= 0) {
        angle = Math.pow(angle, 0.85)
    } else {
        angle = -Math.pow(-angle, 0.85)
    }
    angle *= 180;
    return angle;
}


function drawYearLines(numYears) {
    let text = "";
    for (let i = 0; i < numYears; i++) {
        let angle = (i - 0.5) * 360 / numYears;
        let point = degreeToPointClockwise(50, 50, 50, angle)
        text += `M 50 50 L ${point.x} ${point.y} `
    }
    return text;
}

function drawSolstices() {
    seasons = Astronomy.Seasons(date)

    let mar = dateToDegree(seasons.mar_equinox.date);
    let jun = dateToDegree(seasons.jun_solstice.date);
    let sep = dateToDegree(seasons.sep_equinox.date);
    let dec = dateToDegree(seasons.dec_solstice.date);

    let point
    let text = "";

    point = degreeToPointClockwise(50, 50, 50, mar)
    text += `M 50 50 L ${point.x} ${point.y} `
    point = degreeToPointClockwise(50, 50, 50, jun)
    text += `M 50 50 L ${point.x} ${point.y} `
    point = degreeToPointClockwise(50, 50, 50, sep)
    text += `M 50 50 L ${point.x} ${point.y} `
    point = degreeToPointClockwise(50, 50, 50, dec)
    text += `M 50 50 L ${point.x} ${point.y} `

    return text;
}

function setUpYears() {
    normalYear.setAttribute("d", drawYearLines(365))
    solstice.setAttribute("d", drawSolstices(365))
}

function resize() {
    clock.style.setProperty("--scale", Math.min(window.innerHeight, window.innerWidth) / 575)
}

function render() {
    date = new Date()
    // date = new Date(date.getTime() + 60000)
    
    setUpYears()
    daySectors()
    
    moonPhase()
    celestialBodies()
    displayTime()
    
}
// date = new Date(date.getTime() + 12000000)
// date = new Date("July 22, 2028 13:40:00")

function setUpStars() {
    let star_container = document.getElementById("stars")
    stars.forEach((star) => {
        let starElem = document.createElement("div")
        starElem.setAttribute('id', star.id)
        starElem.setAttribute('class', "celestial-star")
        star_container.append(starElem)
    })
    return
}

setUpStars()

resize()
render()
setInterval(render, 1000)

addEventListener("resize", (_) => {resize()})
