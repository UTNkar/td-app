/*
The functions are used to get today's and tomorrow's dates, for use in
various functions and components in the app.

The format of the date is DD/MM. Ex 27/8 for Aug 27th, or 1/9 for Sep 1st.
The date is returned as a string.
*/

export function getDateToday() {
    const day = new Date().getDate();
    const month = new Date().getMonth()+1;
    const today = day + "/" + month;

    return today;
}

export function getDateTomorrow() {
    var date = new Date();
    date.setDate(new Date().getDate()+1);

    // Formatting to string.
    const day = date.getDate();
    const month = date.getMonth()+1;
    const tomorrow = day + "/" + month;

    return tomorrow;
}


export function timesstampConverter(dateObject: Date) {

    const day = dateObject.getDate();
    const month = dateObject.getMonth()+1;
    const date = day + "/" + month

    return date;
}

// Converts the "release" string of the event from firebase into the desired design
// Returns: A string of example "12:00", "12:01", "12:11"
export function timestampRelease(dateObject: Date) {
    const hour = dateObject.getHours();
    const min = dateObject.getMinutes();
    let formatedMin = min.toString();
    let formatedHour = hour.toString();


    if (min < 10) {
        formatedMin = "0" + min;
    }

    if (hour < 10) {

        formatedHour = "0" + hour;
    }
    return formatedHour + ":" + formatedMin;
}
