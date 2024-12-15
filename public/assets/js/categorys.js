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

// --------------------------------------------------------------------------------------------
const priceRange = document.getElementById("priceRange");
const minValue = document.getElementById("minValue");
const maxValue = document.getElementById("maxValue");

const minPrice = 25000000;
const maxPrice = 45000000;

priceRange.addEventListener("input", function () {
  const value = priceRange.value;

  minValue.textContent = `${formatPrice(minPrice)} تومان`;
  maxValue.textContent = `${formatPrice(value)} تومان`;
});

function formatPrice(price) {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

document.addEventListener("DOMContentLoaded", () => {
  const sections = [
    { header: "priceHeader", content: "priceContent", icon: "priceIcon" },
    {
      header: "registerHeader",
      content: "registerContent",
      icon: "registerIcon",
    },
    {
      header: "mainCameraHeader",
      content: "mainCameraContent",
      icon: "mainCameraIcon",
    },
    {
      header: "selfieCameraHeader",
      content: "selfieCameraContent",
      icon: "selfieCameraIcon",
    },
    { header: "ramHeader", content: "ramContent", icon: "ramIcon" },
    {
      header: "screenSizeHeader",
      content: "screenSizeContent",
      icon: "screenSizeIcon",
    },
  ];

  sections.forEach(({ header, content, icon }) => {
    const headerElement = document.getElementById(header);
    const contentElement = document.getElementById(content);
    const iconElement = document.getElementById(icon);

    headerElement.addEventListener("click", () => {
      contentElement.classList.toggle("hidden");
      iconElement.classList.toggle("rotate-180");
    });
  });

  const priceRange = document.getElementById("priceRange");
  const minPriceValue = document.getElementById("minPriceValue");
  const maxPriceValue = document.getElementById("maxPriceValue");

  priceRange.addEventListener("input", function () {
    const value = priceRange.value;
    minPriceValue.textContent = `25,000,000 تومان`;
    maxPriceValue.textContent = `${formatPrice(value)} تومان`;
  });

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
});
