function check() {
  let day = document.getElementById("__Day").value;
  let month = document.getElementById("__Month").value;
  let year = document.getElementById("__Year").value;
  const inputs = document.getElementsByClassName("input-div");
  let valid = true;
  for (element of inputs) {
    if (!element.getElementsByTagName("input")[0].value) {
      element.getElementsByTagName("small")[0].innerHTML =
        "This field is required";
      valid = false;
    } else {
      element.getElementsByTagName("small")[0].innerHTML = "";
    }
  }
  const sm_day = document.getElementById("sm-day");
  const sm_month = document.getElementById("sm-month");
  const sm_year = document.getElementById("sm-year");

  if (day !== "" && !(day > 0 && day < 32)) {
    sm_day.innerHTML = "must be a valid day";
    valid = false;
  }

  if (month !== "" && !(month > 0 && month < 13)) {
    sm_month.innerHTML = "must be a valid month";
    valid = false;
  }

  if (year !== "" && (year > new Date().getFullYear() || isNaN(Number(year)))) {
    sm_year.innerHTML = "must be in the past";
    valid = false;
  }

  if (!valid) {
    [...document.getElementsByTagName("input")].forEach((element) => {
      element.style.border = "1px solid var(--clr-light-red)";
    });

    [...document.getElementsByTagName("label")].forEach((element) => {
      element.style.color = "var(--clr-light-red)";
    });
    document.getElementById("day").innerHTML = "--";
    document.getElementById("month").innerHTML = "--";
    document.getElementById("year").innerHTML = "--";
    return false;
  } else {
    [...document.getElementsByTagName("input")].forEach((element) => {
      element.style.border = "1px solid var(--clr-light-grey)";
    });
    [...document.getElementsByTagName("label")].forEach((element) => {
      element.style.color = "var(--clr-smokey-grey";
    });
    sm_day.innerHTML = "";
    sm_month.innerHTML = "";
    sm_year.innerHTML = "";

    return true;
  }
}

function date_p() {
  let day = Number(document.getElementById("__Day").value);
  let month = Number(document.getElementById("__Month").value);
  let year = Number(document.getElementById("__Year").value);
  const d = new Date();
  const year_n = Number(d.getFullYear());
  const month_n = Number(d.getMonth()) + 1;
  const day_n = Number(d.getDate());
  let s1 = day + 30 * month + 365 * year;
  let s2 = day_n + 30 * month_n + 365 * year_n;
  let e = s2 - s1;

  if (e < 0) {
    return 0;
  }
  const year_e = Math.floor(e / 365);
  e = e % 365;
  const month_e = Math.floor(e / 30);
  e = e % 30;
  const day_e = e;

  document.getElementById("day").innerHTML = day_e;
  document.getElementById("month").innerHTML = month_e;
  document.getElementById("year").innerHTML = year_e;
}

function submit_btn() {
  if (check()) date_p();
}

document.querySelector(".btn").addEventListener("click", submit_btn);
