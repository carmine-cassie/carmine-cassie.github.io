const latitude = -33.8688;
const longitude = 151.2093;
const elevation = 3;

let globalPhase = 0;

let date = new Date();

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

function timeToDegree(date) {
    date = new Date(date)
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    return 360 * (hh + (mm + ss/60)/60)/24;
}

function displayTime(){
    let localDate = new Date(date)

    let hh = localDate.getHours();
    let mm = localDate.getMinutes();
    let ss = localDate.getSeconds();

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

    let start = degreeToPoint(50, 50, 50, startDegree)
    let end = degreeToPoint(50, 50, 50, endDegree)
    return `M ${start[0]} ${start[1]} A 50 50 0 ${long} 0 ${end[0]} ${end[1]} L 50 50`;
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

function createSpoke(degree) {
    degree = timeToDegree(degree.date)
    let point = degreeToPoint(50, 50, 50, degree)
    return `M 50 50 L ${point[0]} ${point[1]}`
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

    console.log(nDawnStart)
    console.log(aDuskStart)
    console.log(sunHigh)
    console.log(sunLow)

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
        console.log("wah")
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

    console.log(longNight)

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
    return altitude * -0.5 / 90.0 + 1
}

function celestialPos(body) {
    let observer = new Astronomy.Observer(latitude, longitude, elevation)

    let bodyEqu = Astronomy.Equator(body, date, observer, true, true)
    bodyHor = Astronomy.Horizon(date, observer, bodyEqu.ra, bodyEqu.dec, "normal")

    let visualAltitude = calculateAltitude(Math.max(-20, bodyHor.altitude))

    let x = Math.sin(bodyHor.azimuth * Math.PI / 180.0) * visualAltitude * 0.5 + 0.5
    let y = -Math.cos(bodyHor.azimuth * Math.PI / 180.0) * visualAltitude * 0.5 + 0.5

    return {x: x, y: y}
}

function celestialBodies() {
    let sun = celestialPos("Sun")
    sunSky.style.setProperty('--x', sun.x)
    sunSky.style.setProperty('--y', sun.y)

    let moon = celestialPos("Moon")
    moonSky.style.setProperty('--x', moon.x)
    moonSky.style.setProperty('--y', moon.y)

    let mercury = celestialPos("Mercury")
    mercurySky.style.setProperty('--x', mercury.x)
    mercurySky.style.setProperty('--y', mercury.y)

    let venus = celestialPos("Venus")
    venusSky.style.setProperty('--x', venus.x)
    venusSky.style.setProperty('--y', venus.y)

    let mars = celestialPos("Mars")
    marsSky.style.setProperty('--x', mars.x)
    marsSky.style.setProperty('--y', mars.y)

    let jupiter = celestialPos("Jupiter")
    jupiterSky.style.setProperty('--x', jupiter.x)
    jupiterSky.style.setProperty('--y', jupiter.y)

    let saturn = celestialPos("Saturn")
    saturnSky.style.setProperty('--x', saturn.x)
    saturnSky.style.setProperty('--y', saturn.y)

}

function render() {
    // date = new Date()
    // date = new Date(date.getTime() + 600000)

    daySectors()
    moonPhase()
    celestialBodies()
    displayTime()
}

render()
setInterval(render, 1000);
