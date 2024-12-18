let slideOne = 0;

function moveSlide(direction) {
  const sliderBanner = document.getElementById("sliderBanner"); // کانتینر تصاویر
  const totalSlides = document.querySelectorAll("#sliderBanner img").length; // تعداد تصاویر

  // به‌روز رسانی ایندکس اسلاید
  slideOne += direction;

  // بررسی مرزها
  if (slideOne >= totalSlides) {
    slideOne = 0; // اگر از آخرین اسلاید عبور کرد، به اولین برگرد
  } else if (slideOne < 0) {
    slideOne = totalSlides - 1; // اگر از اولین اسلاید عبور کرد، به آخرین برگرد
  }

  // حرکت دادن اسلایدر
  sliderBanner.style.transform = `translateX(-${slideOne * 100}%)`;
  sliderBanner.style.transition = "transform 0.5s ease-in-out"; // تنظیم انیمیشن
}

// اسلایددر دوم

const slider2 = document.getElementById("sliderBanner2");

let isDown2 = false;
let startX2;
let scrollLeft2;

// جلوگیری از کشیدن تصاویر (برای کل اسلایدر)
slider2.addEventListener("mousedown", (e) => {
  isDown2 = true;
  startX2 = e.pageX - slider2.offsetLeft;
  scrollLeft2 = slider2.scrollLeft;

  // جلوگیری از کشیدن تصویر
  e.preventDefault(); // این خط برای جلوگیری از حرکت تصاویر است.

  slider2.style.cursor = "grabbing"; // تغییر نمای موس به حالت grabbing
});

// برای ترک کردن موس
slider2.addEventListener("mouseleave", () => {
  isDown2 = false;
  slider2.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

document.addEventListener("mouseup", () => {
  isDown2 = false;
  slider2.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

slider2.addEventListener("mousemove", (e) => {
  if (!isDown2) return; // اگر موس نگه داشته نشده باشد، کاری انجام نشود
  e.preventDefault(); // جلوگیری از حرکت صفحه
  const x = e.pageX - slider2.offsetLeft;
  const walk = (x - startX2) * 2; // محاسبه فاصله اسکرول
  slider2.scrollLeft = scrollLeft2 - walk; // اعمال اسکرول
});

// برای رویداد تاچ (موبایل)
slider2.addEventListener("touchstart", (e) => {
  isDown2 = true;
  startX2 = e.touches[0].pageX - slider2.offsetLeft;
  scrollLeft2 = slider2.scrollLeft;
  slider2.style.cursor = "grabbing"; // تغییر نمای موس به حالت grabbing
});

document.addEventListener("touchend", () => {
  isDown2 = false;
  slider2.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

slider2.addEventListener("touchmove", (e) => {
  if (!isDown2) return;
  const x = e.touches[0].pageX - slider2.offsetLeft;
  const walk = (x - startX2) * 2; // محاسبه فاصله اسکرول
  slider2.scrollLeft = scrollLeft2 - walk; // اعمال اسکرول
});

// جلوگیری از کشیدن روی تصویر گوشی (دقیقا مثل اسلایدر)
const items = slider2.querySelectorAll(".flex-shrink-0"); // پیدا کردن همه آیتم‌های اسلایدر (گوشی‌ها)

items.forEach((item) => {
  item.addEventListener("mousedown", (e) => {
    e.preventDefault(); // جلوگیری از کشیدن تصویر گوشی
  });
});

// اسلایدر سوم
// -------------------------------------------------------------------------

const slider3 = document.getElementById("scroll-container");

let isDown3 = false;
let startX3;
let scrollLeft3;

// جلوگیری از کشیدن تصاویر (برای کل اسلایدر)
slider3.addEventListener("mousedown", (e) => {
  isDown3 = true;
  startX3 = e.pageX - slider3.offsetLeft;
  scrollLeft3 = slider3.scrollLeft;

  // جلوگیری از کشیدن تصویر
  e.preventDefault(); // این خط برای جلوگیری از حرکت تصاویر است.

  slider3.style.cursor = "grabbing"; // تغییر نمای موس به حالت grabbing
});

// برای ترک کردن موس
slider3.addEventListener("mouseleave", () => {
  isDown3 = false;
  slider3.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

document.addEventListener("mouseup", () => {
  isDown3 = false;
  slider3.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

slider3.addEventListener("mousemove", (e) => {
  if (!isDown3) return; // اگر موس نگه داشته نشده باشد، کاری انجام نشود
  e.preventDefault(); // جلوگیری از حرکت صفحه
  const x = e.pageX - slider3.offsetLeft;
  const walk = (x - startX3) * 2; // محاسبه فاصله اسکرول
  slider3.scrollLeft = scrollLeft3 - walk; // اعمال اسکرول
});

// برای رویداد تاچ (موبایل)
slider3.addEventListener("touchstart", (e) => {
  isDown3 = true;
  startX3 = e.touches[0].pageX - slider3.offsetLeft;
  scrollLeft3 = slider3.scrollLeft;
  slider3.style.cursor = "grabbing"; // تغییر نمای موس به حالت grabbing
});

document.addEventListener("touchend", () => {
  isDown3 = false;
  slider3.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

slider3.addEventListener("touchmove", (e) => {
  if (!isDown3) return;
  const x = e.touches[0].pageX - slider3.offsetLeft;
  const walk = (x - startX3) * 2; // محاسبه فاصله اسکرول
  slider3.scrollLeft = scrollLeft3 - walk; // اعمال اسکرول
});

// جلوگیری از کشیدن روی تصویر گوشی (دقیقا مثل اسلایدر)
const items3 = slider3.querySelectorAll(".flex-shrink-0"); // پیدا کردن همه آیتم‌های اسلایدر (گوشی‌ها)

items3.forEach((item2) => {
  item2.addEventListener("mousedown", (e) => {
    e.preventDefault(); // جلوگیری از کشیدن تصویر گوشی
  });
});

// --------------------------------------------------------------------------------------
// اسلایدر سوم موبایل  ها

const slider4 = document.getElementById("scroll-container3");

let isDown4 = false;
let startX4;
let scrollLeft4;

// جلوگیری از کشیدن تصاویر (برای کل اسلایدر)
slider4.addEventListener("mousedown", (e) => {
  isDown4 = true;
  startX4 = e.pageX - slider4.offsetLeft;
  scrollLeft4 = slider4.scrollLeft;

  // جلوگیری از کشیدن تصویر
  e.preventDefault(); // این خط برای جلوگیری از حرکت تصاویر است.

  slider4.style.cursor = "grabbing"; // تغییر نمای موس به حالت grabbing
});

// برای ترک کردن موس
slider4.addEventListener("mouseleave", () => {
  isDown4 = false;
  slider4.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

document.addEventListener("mouseup", () => {
  isDown4 = false;
  slider4.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

slider4.addEventListener("mousemove", (e) => {
  if (!isDown4) return; // اگر موس نگه داشته نشده باشد، کاری انجام نشود
  e.preventDefault(); // جلوگیری از حرکت صفحه
  const x = e.pageX - slider3.offsetLeft;
  const walk = (x - startX4) * 2; // محاسبه فاصله اسکرول
  slider4.scrollLeft = scrollLeft4 - walk; // اعمال اسکرول
});

// برای رویداد تاچ (موبایل)
slider4.addEventListener("touchstart", (e) => {
  isDown4 = true;
  startX4 = e.touches[0].pageX - slider3.offsetLeft;
  scrollLeft4 = slider4.scrollLeft;
  slider4.style.cursor = "grabbing"; // تغییر نمای موس به حالت grabbing
});

document.addEventListener("touchend", () => {
  isDown4 = false;
  slider4.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

slider4.addEventListener("touchmove", (e) => {
  if (!isDown4) return;
  const x = e.touches[0].pageX - slider4.offsetLeft;
  const walk = (x - startX4) * 2; // محاسبه فاصله اسکرول
  slider3.scrollLeft = scrollLeft4 - walk; // اعمال اسکرول
});

// جلوگیری از کشیدن روی تصویر گوشی (دقیقا مثل اسلایدر)
const items4 = slider4.querySelectorAll(".flex-shrink-0"); // پیدا کردن همه آیتم‌های اسلایدر (گوشی‌ها)

items4.forEach((item3) => {
  item3.addEventListener("mousedown", (e) => {
    e.preventDefault(); // جلوگیری از کشیدن تصویر گوشی
  });
});

// ---------------------------------------------------------------------------------------

// ----------------------------------------------------------------------------------------

// اسلایدر لپ تاپ های استوک

const scrollContainer5 = document.getElementById("scroll-container4");

let isMouseDown5 = false;
let startX5;
let scrollLeft5;

scrollContainer5.addEventListener("mousedown", (e) => {
  isMouseDown5 = true;
  startX5 = e.pageX - scrollContainer5.offsetLeft;
  scrollLeft5 = scrollContainer5.scrollLeft;
  scrollContainer5.style.cursor = "grabbing"; // تغییر ظاهر نشانگر موس
});

scrollContainer5.addEventListener("mouseleave", () => {
  isMouseDown5 = false;
  scrollContainer5.style.cursor = "default";
});

scrollContainer5.addEventListener("mouseup", () => {
  isMouseDown5 = false;
  scrollContainer5.style.cursor = "default";
});

// وقتی موس حرکت می‌کند
scrollContainer5.addEventListener("mousemove", (e) => {
  if (!isMouseDown5) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer4.offsetLeft;
  const scroll = (x - startX5) * 1.5;
  scrollContainer5.scrollLeft = scrollLeft5 - scroll;
});

// --------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------
// کد اسلایدر پلی استین  5

const scrollContainer6 = document.getElementById("scroll-container5");

let isMouseDown6 = false;
let startX6;
let scrollLeft6;

scrollContainer6.addEventListener("mousedown", (e) => {
  isMouseDown6 = true;
  startX6 = e.pageX - scrollContainer6.offsetLeft;
  scrollLeft6 = scrollContainer6.scrollLeft;
  scrollContainer6.style.cursor = "grabbing"; // تغییر ظاهر نشانگر موس
});

scrollContainer6.addEventListener("mouseleave", () => {
  isMouseDown6 = false;
  scrollContainer6.style.cursor = "default";
});

scrollContainer6.addEventListener("mouseup", () => {
  isMouseDown6 = false;
  scrollContainer6.style.cursor = "default";
});

// وقتی موس حرکت می‌کند
scrollContainer6.addEventListener("mousemove", (e) => {
  if (!isMouseDown6) return;
  e.preventDefault();
  const x = e.pageX - scrollContainer4.offsetLeft;
  const scroll = (x - startX6) * 1.5;
  scrollContainer6.scrollLeft = scrollLeft6 - scroll;
});

// --------------------------------------------------------------------------------------------

// باز و بسته کردن همبرگرمنو

// گرفتن عناصر
const hamburgerMenu = document.getElementById("hamburgerMenu");
const openButton = document.getElementById("openButton");
const closeButton = document.getElementById("closeButton");

// تابع باز کردن منو
function openMenu() {
  hamburgerMenu.style.transform = "translateY(0)";
}

// تابع بستن منو
function closeMenu() {
  hamburgerMenu.style.transform = "translateY(100%)";
}

// رویداد کلیک برای دکمه‌ها
openButton.addEventListener("click", openMenu);
closeButton.addEventListener("click", closeMenu);

// ---------------------------------------------------------------------------------------------

// درگ کردن شماره های فوتتر

const container = document.querySelector(".overflow-x-auto");

let isDown = false;
let startX;
let scrollLeft;

container.addEventListener("mousedown", (e) => {
  isDown = true;
  container.classList.add("active");
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mouseup", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2;
  container.scrollLeft = scrollLeft - walk;
});

const tageLi = document.querySelector(".menu");

const megamenu = document.querySelector(".megamenu");

tageLi.addEventListener("mouseover", () => {
  megamenu.classList.remove("hidden");
  megamenu.classList.add("flex");
  megamenu.classList.add("transition-all", "duration-300");
});

tageLi.addEventListener("mouseout", () => {
  if (!megamenu.matches(":hover")) {
    megamenu.classList.remove("flex");
    megamenu.classList.add("transition-all", "duration-300");
    megamenu.classList.add("hidden");
  }
});

megamenu.addEventListener("mouseover", () => {
  megamenu.classList.remove("hidden");
  megamenu.classList.add("flex");
  megamenu.classList.add("transition-all", "duration-300");
});

megamenu.addEventListener("mouseout", () => {
  megamenu.classList.remove("flex");
  megamenu.classList.add("transition-all", "duration-300");
  megamenu.classList.add("hidden");
});

const tabletContainer = document.querySelector(".tablet-container");
const tabletItems = document.querySelectorAll(".tablet-item");

tabletContainer.addEventListener("mouseover", () => {
  tabletItems.forEach((item) => {
    item.classList.remove("hide");
    item.classList.add("show");
  });
});

tabletContainer.addEventListener("mouseout", () => {
  tabletItems.forEach((item) => {
    item.classList.remove("show");
    item.classList.add("hide");
  });
});

const smartwatchContainer = document.querySelector(".smartwatch-container");
const smartwatchItems = document.querySelectorAll(".smartwatch-item");

smartwatchContainer.addEventListener("mouseover", () => {
  smartwatchItems.forEach((item) => {
    item.classList.remove("hide");
    item.classList.add("show");
  });
});

smartwatchContainer.addEventListener("mouseout", () => {
  smartwatchItems.forEach((item) => {
    item.classList.remove("show");
    item.classList.add("hide");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const megamenu = document.querySelector(".megamenu");
  const menuItems = document.querySelectorAll(".menu-item");
  const dynamicContent = document.getElementById("dynamic-content");

  const mobileContent = document.getElementById("dynamic-content").innerHTML;

  menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      const category = item.getAttribute("data-category");
      switch (category) {
        case "laptop":
          dynamicContent.innerHTML = `
            <div class="flex justify-around mt-7">
              <div class="flex gap-[37px] container2">
                <div class="flex flex-col gap-2 items-center">
                  <h3 class="text-[16px]">لپ تاپ</h3>
                  <ul class="flex gap-2 flex-col items-center text-[13px] text-[#525252]">
                    <li>لپ تاپ دل</li>
                    <li>لپ تاپ ایسوس</li>
                    <li>لپ تاپ اپل</li>
                    <li>لپ تاپ لنوو</li>
                    <li>لپ تاپ ایسر</li>
                  </ul>
                </div>
              </div>
            </div>
          `;
          break;
        case "computer":
          dynamicContent.innerHTML = `
            <div class="flex justify-around mt-7">
              <div class="flex gap-[37px] container2">
                <div class="flex flex-col gap-2 items-center">
                  <h3 class="text-[16px]">کامپیوتر و تجهیزات جانبی</h3>
                  <ul class="flex gap-2 flex-col items-center text-[13px] text-[#525252]">
                    <li>موس</li>
                    <li>کیبورد</li>
                    <li>مانیتور</li>
                    <li>کارت گرافیک</li>
                    <li>پردازنده</li>
                  </ul>
                </div>
              </div>
            </div>
          `;
          break;
        case "game":
          dynamicContent.innerHTML = `
            <div class="flex justify-around mt-7">
              <div class="flex gap-[37px] container2">
                <div class="flex flex-col gap-2 items-center">
                  <h3 class="text-[16px]">بازی و سرگرمی</h3>
                  <ul class="flex gap-2 flex-col items-center text-[13px] text-[#525252]">
                    <li>کنسول بازی پلی‌استیشن 5</li>
                    <li>کنسول بازی ایکس‌باکس</li>
                    <li>گیم‌پد</li>
                    <li>کارت بازی</li>
                  </ul>
                </div>
              </div>
            </div>
          `;
          break;
        case "mobile":
          dynamicContent.innerHTML = mobileContent;
          break;
      }
    });
  });

  megamenu.classList.remove("hideMegamenu");

  dynamicContent.innerHTML = mobileContent;
});

// مگا منو سایز موبایل

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {
  const header = item.querySelector(".accordion-header");
  const content = item.querySelector(".accordion-content");
  const icon = item.querySelector("img");

  header.addEventListener("click", () => {
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        const otherContent = otherItem.querySelector(".accordion-content");
        const otherIcon = otherItem.querySelector("img");
        otherContent.classList.add("hidden");
        otherIcon.style.transform = "rotate(0deg)";
      }
    });

    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
      icon.style.transform = "rotate(180deg)";
    } else {
      content.classList.add("hidden");
      icon.style.transform = "rotate(0deg)";
    }
  });

  const links = content.querySelectorAll("li");
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
    });
  });
});

// بستن مگامنو در سایز موبایل
document.addEventListener("DOMContentLoaded", () => {
  const closed = document.querySelector(".close");
  const tageProducts = document.querySelector(".products");
  const megaMobile = document.querySelector(".megaMobile");

  if (!closed || !tageProducts || !megaMobile) {
    console.error("یکی از عناصر یافت نشد!");
    return;
  }

  tageProducts.addEventListener("click", (event) => {
    event.stopPropagation();
    megaMobile.classList.remove("hidden");
    megaMobile.classList.add("block");
  });

  closed.addEventListener("click", (event) => {
    event.stopPropagation();
    megaMobile.classList.remove("block");
    megaMobile.classList.add("hidden");
  });

  megaMobile.addEventListener("click", (event) => {
    event.stopPropagation();
  });
});

// منو آکاردئونی داخل قسسمت موبایل
const apple = document.querySelector(".phonTab");
const iconArrow = document.querySelector(".arrowdown");
const allApple = document.querySelector(".allApple");

apple.addEventListener("click", () => {
  if (allApple.classList.contains("noneApple")) {
    // نمایش محتوا
    allApple.classList.remove("noneApple");
    allApple.classList.add("showMobile");
    iconArrow.style.transform = "rotate(180deg)";
  } else {
    // مخفی کردن محتوا
    allApple.classList.remove("showMobile");
    allApple.classList.add("noneApple");
    iconArrow.style.transform = "rotate(0deg)";
  }
});
