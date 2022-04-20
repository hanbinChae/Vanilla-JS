const clockTitle = document.querySelector(".js-clock");

function christmas() {
  const christ = new Date("2022,12,24");
  const date = new Date();

  const gap = christ.getTime() - date.getTime();
  const day = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hour = String(
    Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  ).padStart(2, "0");

  const minutes = String(
    Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60))
  ).padStart(2, "0");

  const seconds = String(Math.floor((gap % (1000 * 60)) / 1000)).padStart(
    2,
    "0"
  );

  clockTitle.innerHTML = `${day}d ${hour}h ${minutes}m ${seconds}s`;
}

christmas();
setInterval(christmas, 1000);
