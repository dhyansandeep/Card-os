let highestZIndex = 10;
document.querySelectorAll('.window').forEach((win) => {
  dragElement(win);
});
function bringToFront(element) {
  highestZIndex++;
  element.style.zIndex = highestZIndex;
}
function openWindow(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = "flex";
    bringToFront(element);
  }
}
function closeWindow(id) {
  const element = document.getElementById(id);
  if (element) {
    element.style.display = "none";
  }
}
function dragElement(element) {
  let initialX = 0, initialY = 0, currentX = 0, currentY = 0;
  const header = document.getElementById(element.id + "header");

  if (header) {
    header.onmousedown = startDragging;
  } else {
    element.onmousedown = startDragging;
  }
  function startDragging(e) {
    e = e || window.event;
    e.preventDefault();
    bringToFront(element);
    initialX = e.clientX;
    initialY = e.clientY;
    document.onmouseup = stopDragging;
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    currentX = initialX - e.clientX;
    currentY = initialY - e.clientY;
    initialX = e.clientX;
    initialY = e.clientY;
    element.style.top = (element.offsetTop - currentY) + "px";
    element.style.left = (element.offsetLeft - currentX) + "px";
  }
  function stopDragging() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
function updateClock() {
  const timeElement = document.getElementById("timeElement");
  if (timeElement) {
    const now = new Date();
    timeElement.textContent = now.toLocaleString('en-US', {
      month: 'numeric',
      day: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
  }
}
setInterval(updateClock, 1000);
updateClock();
let currentDate = new Date();
function renderCalendar() {
  const monthYearTitle = document.getElementById('monthYearTitle');
  const calendarDays = document.getElementById('calendarDays');
  if (!monthYearTitle || !calendarDays) return;
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  monthYearTitle.textContent = `${monthNames[month]} ${year}`;
  calendarDays.innerHTML = '';
  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const today = new Date();
  for (let i = 0; i < firstDayIndex; i++) {
    const emptyDiv = document.createElement('div');
    emptyDiv.classList.add('calendar-day', 'empty');
    calendarDays.appendChild(emptyDiv);
  }
  for (let day = 1; day <= totalDays; day++) {
    const dayDiv = document.createElement('div');
    dayDiv.classList.add('calendar-day');
    dayDiv.textContent = day;
    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
      dayDiv.classList.add('today');
    }
    calendarDays.appendChild(dayDiv);
  }
}
function changeMonth(offset) {
  currentDate.setMonth(currentDate.getMonth() + offset);
  renderCalendar();
}
renderCalendar();