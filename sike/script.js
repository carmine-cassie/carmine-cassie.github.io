const latitude = -33.5

const months = [
    [31, "#W"],
    [28.25, "#T"],
    [31, "#TW"],
    [30, "#TT"],
    [31, "#L"],
    [30, "#LW"],
    [31, "#LW"],
    [31, "#LTW"],
    [30, "#LTT"],
    [31, "#LL"],
    [30, "#LLW"],
    [31, "#LLT"],
]

const radius = 225
const center = 250

const year_length = 365.25
const earth_tilt = 23.439// / 360 * 2 * Math.PI

// d = 23.45 * sin(360 * (284 + n)/365)

function declination_date_1(declination) {
    n = (year_length/(Math.PI*2) * Math.asin(declination/earth_tilt)) - 284
    return (n + 10*year_length)% year_length
}

function declination_date_2(declination) {
    n = (year_length/(Math.PI*2) * (Math.PI - Math.asin(declination/earth_tilt))) - 284
    return (n + 10*year_length)% year_length
}

function day_point(day, radius) {
    angle = (day / year_length) * 2 * Math.PI

    return {
        x: center + (radius * Math.sin(angle)),
        y: center - (radius * Math.cos(angle))
    }
}

function tick(length, width, colour, day) {
    svg = document.getElementById("sike")

    let start_point = day_point(day, radius-length)
    let end_point = day_point(day, radius)

    svg.innerHTML += `<line x1="${start_point.x}" x2="${end_point.x}" y1="${start_point.y}" y2="${end_point.y}" stroke-width="${width}" stroke="${colour}"></line>`
    // draw the dang tick
    // in future add an option for text

}

function arc(offset, day1, day2, width, colour) {
    svg = document.getElementById("sike")

    // Keep them clockwise
    if (day2 - day1 > 180) {
        [day1, day2] = [day2, day1]
    }

    let start_point = day_point(day1, radius+offset)
    let end_point = day_point(day2, radius+offset)

    // Shouldn't need this as we'll never draw an arc > 180 degrees
    // let large_arc = 0
    // if (day2 - day1 > 180) {
    //     large_arc = 1
    // }

    svg.innerHTML += `<path d="M ${start_point.x} ${start_point.y} A ${radius + offset} ${radius + offset} 0 0 1 ${end_point.x} ${end_point.y}" stroke-width="${width}" stroke="${colour}" fill="none" />`


    // draw the dang arc
    // maybe use max and min to order the angles
    // idk angle order will be weird lol
    // ig if it's between 180-360 they're wrong? we can try that it's kinda evil
    // in future add an option for text
}


let day = 0
let gap = 1
for (let i = 0; i < months.length; i++) {

    arc(5, day + gap, day + months[i][0] - gap, 2, "grey")

    day += months[i][0]
}

north_solstice = declination_date_1(earth_tilt)
south_solstice = declination_date_1(-earth_tilt)

if (latitude > earth_tilt) {
    tick(15, 3, "blue", south_solstice)
    tick(15, 3, "orange", north_solstice)
} else if (latitude < -earth_tilt) {
    tick(15, 3, "orange", south_solstice)
    tick(15, 3, "blue", north_solstice)
} else {
    tick(15, 3, "blue", south_solstice)
    tick(15, 3, "blue", north_solstice)
}

if (Math.abs(latitude) > earth_tilt) {
    equinox_1 = declination_date_1(0)
    equinox_2 = declination_date_2(0)

    tick(15, 3, "green", equinox_1)
    tick(15, 3, "green", equinox_2)
}

if (Math.abs(latitude) < earth_tilt) {
    zero_shadow_1 = declination_date_1(latitude)
    zero_shadow_2 = declination_date_2(latitude)

    tick(15, 3, "orange", zero_shadow_1)
    tick(15, 3, "orange", zero_shadow_2)
}

if (Math.abs(latitude) > 90 - earth_tilt) {
    hemisphere = latitude / Math.abs(latitude)

    // once the distance of the sun from the equator > than the distance from the pole to the point
    midnight_sun_lat = hemisphere * (90 - Math.abs(latitude))
    polar_night_lat = -hemisphere * (90 - Math.abs(latitude))
    midnight_sun_1 = declination_date_1(midnight_sun_lat)
    midnight_sun_2 = declination_date_2(midnight_sun_lat)
    polar_night_1 = declination_date_1(polar_night_lat)
    polar_night_2 = declination_date_2(polar_night_lat)

    arc(-7.5, polar_night_1, polar_night_2, 2, "blue")
    arc(-7.5, midnight_sun_1, midnight_sun_2, 2, "orange")
}