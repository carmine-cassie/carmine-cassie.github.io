const latitude = -33.8688;
const longitude = 151.2093;
const elevation = 3;

let globalPhase = 0;

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
    let point = degreeToPoint(50, 50, 50, degree)
    return `M 50 50 L ${point[0]} ${point[1]}`
}

function daySectors() {
    let observer = new Astronomy.Observer(latitude, longitude, elevation)
    
    let dayStart = timeToDegree(Astronomy.SearchAltitude('Sun', observer, +1, new Date(), 1, 0).date)
    let cDawnStart = timeToDegree(Astronomy.SearchAltitude('Sun', observer, +1, new Date(), 1, -6).date)
    let nDawnStart = timeToDegree(Astronomy.SearchAltitude('Sun', observer, +1, new Date(), 1, -12).date)
    let aDawnStart = timeToDegree(Astronomy.SearchAltitude('Sun', observer, +1, new Date(), 1, -18).date)
    let nightStart = timeToDegree(Astronomy.SearchAltitude('Sun', observer, -1, new Date(), 1, -18).date)
    let aDuskStart = timeToDegree(Astronomy.SearchAltitude('Sun', observer, -1, new Date(), 1, -12).date)
    let nDuskStart = timeToDegree(Astronomy.SearchAltitude('Sun', observer, -1, new Date(), 1, -6).date)
    let cDuskStart = timeToDegree(Astronomy.SearchAltitude('Sun', observer, -1, new Date(), 1, 0).date)

    let midday = timeToDegree(Astronomy.SearchHourAngle('Sun', observer, 0, new Date(), 1).time.date);
    let midnight = timeToDegree(Astronomy.SearchHourAngle('Sun', observer, 12, new Date(), 1).time.date);

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
    let phase = Astronomy.MoonPhase(new Date())
    moonShadow.setAttribute('d', createMoon(phase))
}

daySectors()
moonPhase()
displayTime()
setInterval(displayTime, 50);
