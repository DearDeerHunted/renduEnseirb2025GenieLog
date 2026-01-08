export const eventList = [];

export function addEvent(event) {
    eventList.push(event);
    console.log("add event:", event.name);
}