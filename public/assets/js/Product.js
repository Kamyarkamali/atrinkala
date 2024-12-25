// هاور کردن و فعال و غیر فعال کردن مگا منو

const tageLi = document.querySelector(".menu");

const tageLiMobile = document.querySelector(".menuMobile");

const megamenu = document.querySelector(".megamenu");

// وقتی موس روی "دسته بندی ها" می‌رود مگا منو باز می‌شود
tageLi.addEventListener("mouseover", () => {
  megamenu.classList.remove("hidden");
  megamenu.classList.add("flex");
  megamenu.classList.add("transition-all", "duration-300");
});

// وقتی موس از "دسته بندی ها" خارج می‌شود، مگا منو بسته می‌شود
tageLi.addEventListener("mouseout", () => {
  // فقط زمانی که موس از مگا منو هم خارج شود بسته می‌شود
  if (!megamenu.matches(":hover")) {
    megamenu.classList.remove("flex");
    megamenu.classList.add("transition-all", "duration-300");
    megamenu.classList.add("hidden");
  }
});

// زمانی که موس روی مگا منو می‌رود، مگا منو نباید بسته شود
megamenu.addEventListener("mouseover", () => {
  megamenu.classList.remove("hidden");
  megamenu.classList.add("flex");
  megamenu.classList.add("transition-all", "duration-300");
});

// وقتی موس از مگا منو خارج می‌شود، مگا منو بسته می‌شود
megamenu.addEventListener("mouseout", () => {
  megamenu.classList.remove("flex");
  megamenu.classList.add("transition-all", "duration-300");
  megamenu.classList.add("hidden");
});

// انتخاب container و آیتم‌ها
const tabletContainer = document.querySelector(".tablet-container");
const tabletItems = document.querySelectorAll(".tablet-item");

// رویداد هاور برای نمایش آیتم‌ها
tabletContainer.addEventListener("mouseover", () => {
  tabletItems.forEach((item) => {
    item.classList.remove("hide");
    item.classList.add("show");
  });
});

// رویداد خارج شدن از هاور برای مخفی کردن آیتم‌ها
tabletContainer.addEventListener("mouseout", () => {
  tabletItems.forEach((item) => {
    item.classList.remove("show");
    item.classList.add("hide");
  });
});

// هاور برای فعال و  غیر فعال کردن  ساعت های هوشمند

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

// هاور برای فعال و غیر فعال کردن لوازم جانبی گوشی

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
  const closed = document.querySelector(".closed");
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

// ------------------------------------------------------------------------------

const $ = document;

// عملیات  باز و بسته  کردن پاپ آپ و اقزودن و حذف کردن overlay
const images = $.querySelector(".itemimages");
const popup = $.querySelector(".popup");
const bgBody = $.querySelector(".overlaybg");
const closed = $.querySelector(".closed");

images.addEventListener("click", () => {
  popup.classList.add("block");
  popup.classList.remove("hidden");
  bgBody.classList.add("overlay");
});

closed.addEventListener("click", () => {
  popup.classList.remove("block");
  popup.classList.add("hidden");
  bgBody.classList.remove("overlay");
});

$.addEventListener("DOMContentLoaded", () => {
  if (popup.classList.contains("popshow")) {
    bgBody.classList.add("overlay");
  } else {
    bgBody.classList.remove("overlay");
  }
});

// اسلایدر داخل پاپ آپ
const slides = $.querySelectorAll(".slides2 img");
let slideIndex = 0;
let intervalId = null;
initializeSlider();

$.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider() {
  if (slides.length > 0) {
    slides[slideIndex].classList.add("active");
    intervalId = setInterval(nextSlide, 4000);
  }
}

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");
}

function preveSlide() {
  clearInterval(intervalId);
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

// باز و بسته کردن باکس 3

// قسمت  نمایش مشخصات بیشتر در  سایز موبایل

const toggleContent = () => {
  const content = document.getElementById("text-content");
  const button = document.getElementById("toggle-btn");
  const icon = document.getElementById("toggle-icon");
  const gradient = document.getElementById("gradient");

  if (content.classList.contains("max-h-[4rem]")) {
    content.classList.remove("max-h-[4rem]", "sm:max-h-[6rem]");
    content.classList.add("max-h-full");
    button.querySelector("span").textContent = "نمایش کمتر";
    icon.style.transform = "rotate(180deg)";
    gradient.style.display = "none";
  } else {
    content.classList.add("max-h-[4rem]", "sm:max-h-[6rem]");
    content.classList.remove("max-h-full");
    button.querySelector("span").textContent = "نمایش بیشتر";
    icon.style.transform = "rotate(0deg)";
    gradient.style.display = "block";
  }
};

const toggleContents = () => {
  const contents = document.getElementById("text-contents");
  const buttons = document.getElementById("toggle-btns");
  const icons = document.getElementById("toggle-icons");
  const gradients = document.getElementById("gradients");

  if (contents.classList.contains("max-h-[4rem]")) {
    contents.classList.remove("max-h-[4rem]", "sm:max-h-[6rem]");
    contents.classList.add("max-h-full");
    buttons.querySelector("span").textContent = "نمایش کمتر";
    icons.style.transform = "rotate(180deg)";
    gradients.style.display = "none";
  } else {
    contents.classList.add("max-h-[4rem]", "sm:max-h-[6rem]");
    contents.classList.remove("max-h-full");
    buttons.querySelector("span").textContent = "نمایش بیشتر";
    icons.style.transform = "rotate(0deg)";
    gradients.style.display = "block";
  }
};
// عوض  کردن قسمت مشخصات با کلیک کردن
$.addEventListener("DOMContentLoaded", () => {
  const togeleBtn = $.querySelectorAll(".tab");
  const created = $.querySelector(".created");
  const description = $.querySelector(".desc");
  const tabaledesc1 = $.querySelector(".tabaledesc");
  const tabaledesc2 = $.querySelector(".tabaledescription");
  const comments = $.querySelector(".comments");
  const slider = $.querySelector(".allslides");

  const toggleTabContent = (btnText) => {
    const clearTabs = () => {
      togeleBtn.forEach((otherBtn) => {
        otherBtn.classList.remove("border-b-[2px]", "border-blue-600", "py-3");
      });
    };

    const showTabContent = (contentToShow, contentToHide1, contentToHide2) => {
      contentToShow.classList.remove("hidden");
      contentToShow.classList.add("block");
      contentToHide1.classList.remove("block");
      contentToHide1.classList.add("hidden");
      contentToHide2.classList.remove("block");
      contentToHide2.classList.add("hidden");
    };

    const hideTabContent = () => {
      description.classList.remove("block");
      description.classList.add("hidden");
      tabaledesc1.classList.remove("block");
      tabaledesc2.classList.remove("block");
      tabaledesc1.classList.add("hidden");
      tabaledesc2.classList.add("hidden");
    };

    clearTabs();

    if (btnText === "توضیحات تکمیلی") {
      showTabContent(description, tabaledesc1, tabaledesc2);
      created.classList.remove("hidden");
      created.classList.add("block");
    } else if (btnText === "مشخصات فنی") {
      showTabContent(tabaledesc1, description, tabaledesc2);
      tabaledesc1.classList.remove("hidden");
      tabaledesc1.classList.add("block");
      tabaledesc2.classList.remove("hidden");
      tabaledesc2.classList.add("block");
      created.classList.remove("block");
      created.classList.add("hidden");
      slider.classList.remove("block");
      slider.classList.add("hidden");
    } else if (btnText === "نظرات کاربران (12)") {
      hideTabContent();
      comments.classList.remove("hidden");
      comments.classList.add("block");
      created.classList.remove("block");
      created.classList.add("hidden");
      slider.classList.remove("block");
      slider.classList.add("hidden");
    } else if (btnText === "محصولات مشابه") {
      created.classList.remove("block");
      created.classList.add("hidden");
      slider.classList.remove("hidden");
      slider.classList.add("block");
      comments.classList.remove("block");
      comments.classList.add("hidden");
      tabaledesc2.classList.remove("block");
      tabaledesc2.classList.add("hidden");
    }
  };

  const applyDefaultStyles = () => {
    const technicalBtn = Array.from(togeleBtn).find(
      (btn) => btn.textContent.trim() === "مشخصات فنی"
    );

    if (technicalBtn) {
      technicalBtn.classList.add("border-b-[2px]", "border-blue-600", "py-3");
      tabaledesc1.classList.remove("hidden");
      tabaledesc2.classList.remove("hidden");
      tabaledesc1.classList.add("block");
      tabaledesc2.classList.add("block");
      description.classList.remove("block");
      description.classList.add("hidden");
      created.classList.remove("hidden");
      created.classList.add("block");
      slider.classList.add("hidden");
      slider.classList.remove("block");
      comments.classList.remove("block");
      comments.classList.add("hidden");
    }
  };

  applyDefaultStyles();

  togeleBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      toggleTabContent(btn.textContent.trim());
      btn.classList.add("border-b-[2px]", "border-blue-600", "py-3");
    });
  });
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

const slider6 = document.getElementById("scroll-container6");

let isDown6 = false;
let startX6;
let scrollLeft6;

// جلوگیری از کشیدن تصاویر (برای کل اسلایدر)
slider6.addEventListener("mousedown", (e) => {
  isDown6 = true;
  startX6 = e.pageX - slider6.offsetLeft;
  scrollLeft6 = slider6.scrollLeft;

  // جلوگیری از کشیدن تصویر
  e.preventDefault(); // این خط برای جلوگیری از حرکت تصاویر است.

  slider6.style.cursor = "grabbing"; // تغییر نمای موس به حالت grabbing
});

// برای ترک کردن موس
slider6.addEventListener("mouseleave", () => {
  isDown6 = false;
  slider6.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

document.addEventListener("mouseup", () => {
  isDown6 = false;
  slider6.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

slider6.addEventListener("mousemove", (e) => {
  if (!isDown6) return; // اگر موس نگه داشته نشده باشد، کاری انجام نشود
  e.preventDefault(); // جلوگیری از حرکت صفحه
  const x = e.pageX - slider6.offsetLeft;
  const walk = (x - startX6) * 2; // محاسبه فاصله اسکرول
  slider6.scrollLeft = scrollLeft6 - walk; // اعمال اسکرول
});

// برای رویداد تاچ (موبایل)
slider6.addEventListener("touchstart", (e) => {
  isDown6 = true;
  startX6 = e.touches[0].pageX - slider6.offsetLeft;
  scrollLeft6 = slider6.scrollLeft;
  slider6.style.cursor = "grabbing"; // تغییر نمای موس به حالت grabbing
});

document.addEventListener("touchend", () => {
  isDown6 = false;
  slider6.style.cursor = "grab"; // تغییر نمای موس به حالت grab
});

slider6.addEventListener("touchmove", (e) => {
  if (!isDown6) return;
  const x = e.touches[0].pageX - slider6.offsetLeft;
  const walk = (x - startX6) * 2; // محاسبه فاصله اسکرول
  slider6.scrollLeft = scrollLeft6 - walk; // اعمال اسکرول
});

// جلوگیری از کشیدن روی تصویر گوشی (دقیقا مثل اسلایدر)
const items7 = slider4.querySelectorAll(".flex-shrink-0"); // پیدا کردن همه آیتم‌های اسلایدر (گوشی‌ها)

items7.forEach((item8) => {
  item8.addEventListener("mousedown", (e) => {
    e.preventDefault(); // جلوگیری از کشیدن تصویر گوشی
  });
});
