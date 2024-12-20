// هاور کردن و فعال و غیر فعال کردن مگا منو

const tageLi = document.querySelector(".menu");

const tageLiMobile = document.querySelector(".menuMobile");

const megamenu = document.querySelector(".megamenu");

const changePasswordModal = document.querySelector(".changePasswordModal");

const backContainer = document.querySelector(".backContainer");

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

// --------------------------------------------------------------------
const $ = document;
// ئکمه اول  ویرایش
const edite1 = $.querySelector(".edite1");
const edite2 = $.querySelector(".edite2");

// مودال اول
const modal1 = $.querySelector(".modal1");

const modal2 = $.querySelector(".modal2");

const modal3 = $.querySelector(".modal3");

const modal4 = $.querySelector(".modal4");

const edite3 = $.querySelector(".edite3");

const edite4 = $.querySelector(".edite4");

// انتخاب سایدبارها موبایل و دکستاپ

// دکستاپ
const saidbar1 = $.querySelector(".saidbar1");
const liDecktop = saidbar1.querySelectorAll("li");

const listSaidbarMobile = $.querySelector(".listSaidbarMobile");

const liMobile = listSaidbarMobile.querySelectorAll("li");

// موبایل
const saidbarMobile = $.querySelector(".saidbarMobile");

// موضوع صفحه
const titlePage = $.querySelector(".titlePage");
const myWallet = $.querySelector(".myWallet");
const tickets = $.querySelector(".ticket");

// کل باکس  ها
const boxContainer = $.querySelector(".boxAll");

const saidbar = $.querySelector(".saidbar");

const update1 = $.querySelector(".update1");

const close1 = $.querySelector(".close1");

const close2 = $.querySelector(".close2");

const closesvg = $.querySelector(".closesvg");

const closesvg2 = $.querySelector(".closesvg2");

const closemodal2 = $.querySelector(".closemodal2");

const modal2Mobile = $.querySelector(".modal2Mobile");

// چک‌باکس تغییر ایمیل
const toggleEmail = $.querySelector(".toggleemail");

const btnOpenModal2 = $.querySelector(".btnOpenModal2");

const btnOpenModal3 = $.querySelector(".btnOpenModal3");

const edite4Mobile = $.querySelector(".edite4Mobile");

const openMpdamMobile = $.querySelector(".openMpdamMobile");

const myComments = $.querySelector(".myComments");

// باکس اول حساب کاربری در سایز دکستاپ
const informationuser = $.querySelector(".informationuser");

// باکس های سایز موبایل مربوط به صفحه حساب کاربری
const boxMobile1 = $.querySelector(".boxMobile1");
const boxMobile2 = $.querySelector(".boxMobile2");

// اینپوت‌های مخفی برای ایمیل
const emailInputs = $.querySelector(".changePassword");

edite1.addEventListener("click", () => {
  if (modal1.classList.contains("hidden")) {
    edite1.classList.remove("z-50");
    boxContainer.classList.add("hidden");
    saidbar.classList.add("hidden");
    saidbar.classList.remove("block");
    modal1.classList.remove("hidden");
    modal1.classList.add("block");
    close1.classList.add("hidden");
  }
});

edite2.addEventListener("click", () => {
  if (modal1.classList.contains("hidden")) {
    modal1.classList.add("z-[100]");
    modal2.classList.remove("z-[100]");

    // نمایش و مخفی کردن مودال‌ها
    modal1.classList.remove("hidden");
    modal1.classList.add("block");
    modal2.classList.add("hidden");
    modal2.classList.remove("block");

    boxContainer.classList.add("hidden");
    saidbar.classList.add("hidden");
    close1.classList.add("hidden");
  }
});

edite3.addEventListener("click", () => {
  if (modal2.classList.contains("hidden")) {
    modal2.classList.add("z-[100]");
    modal1.classList.remove("z-[100]");

    // نمایش و مخفی کردن مودال‌ها
    modal2.classList.remove("hidden");
    modal2.classList.add("block");
    modal1.classList.add("hidden");
    modal1.classList.remove("block");

    boxContainer.classList.add("hidden");
    saidbar.classList.add("hidden");
    close1.classList.add("hidden");
  }
});

openMpdamMobile.addEventListener("click", () => {
  btnOpenModal3.classList.remove("hidden");
  btnOpenModal3.classList.add("block");
});

const openModalMobile = () => {
  btnOpenModal3.classList.remove("block");
  btnOpenModal3.classList.add("hidden");
  modal3.classList.remove("hidden");
  modal3.classList.add("block");
  modal3.classList.add("z-[100]");
};

toggleEmail.addEventListener("change", () => {
  if (toggleEmail.checked) {
    close1.classList.remove("hidden");
    update1.classList.remove("hidden");
    update1.classList.add("flex");
  } else {
    update1.classList.remove("flex");
    close1.classList.add("hidden");
    update1.classList.add("hidden");
  }
});

emailInputs.addEventListener("change", () => {
  if (emailInputs.checked) {
    changePasswordModal.classList.remove("hidden");
    changePasswordModal.classList.add("flex");
  } else {
    changePasswordModal.classList.add("hidden");
    changePasswordModal.classList.remove("flex");
  }
});

// چک کردن هر دو چک باکس اگر درست باشه
toggleEmail.addEventListener("change", handleCheckboxChange);
emailInputs.addEventListener("change", handleCheckboxChange);

function handleCheckboxChange() {
  const isToggleEmailChecked = toggleEmail.checked;
  const isEmailInputsChecked = emailInputs.checked;

  if (isToggleEmailChecked && isEmailInputsChecked) {
    close1.classList.add("hidden");
    close1.classList.remove("flex");
    closemodal2.classList.add("hidden");
    closemodal2.classList.remove("flex");
  } else if (isToggleEmailChecked) {
    close1.classList.remove("hidden");
    close1.classList.add("flex");
  } else {
    backContainer.classList.add("hidden");
    backContainer.classList.remove("flex");
  }
}

close1.addEventListener("click", () => {
  modal1.classList.remove("block");
  modal1.classList.add("hidden");
  boxContainer.classList.remove("hidden");
  saidbar.classList.remove("hidden");
  edite1.classList.add("z-100");
});

closesvg.addEventListener("click", () => {
  modal1.classList.remove("block");
  modal1.classList.add("hidden");
  boxContainer.classList.remove("hidden");
  edite1.classList.add("z-50");
});

closemodal2.addEventListener("click", () => {
  modal2.classList.remove("block");
  modal2.classList.add("hidden");
  boxContainer.classList.remove("hidden");
});

btnOpenModal2.addEventListener("click", () => {
  modal2.classList.remove("block");
  modal2.classList.add("hidden");
  modal3.classList.add("block");
  modal3.classList.remove("hidden");
  modal3.classList.add("z-[100]");
});

function btnModalMobile() {
  btnOpenModal3.classList.remove("hidden");
  btnOpenModal3.classList.add("block");
  modal3.classList.add("block");
  modal3.classList.remove("hidden");
  modal3.classList.add("z-[100]");
}

function closeHandeler() {
  modal3.classList.remove("block");
  modal3.classList.add("hidden");
  boxContainer.classList.remove("hidden");
}

document.addEventListener("DOMContentLoaded", () => {
  // تابع برای تغییر نمایش بخش‌ها
  const toggleSections = (activeSection, title) => {
    const sections = [
      informationuser,
      myWallet,
      tickets,
      myComments,
      boxMobile1,
      boxMobile2,
      saidbarMobile,
    ];

    // پنهان کردن تمام بخش‌ها
    sections.forEach((section) => {
      section.classList.add("hidden");
      section.classList.remove("block");
    });

    // نمایش بخش فعال
    if (activeSection) {
      activeSection.classList.remove("hidden");
      activeSection.classList.add("block");
    }

    // تغییر عنوان صفحه
    titlePage.innerText = title;
  };

  // مقدار پیش‌فرض: "حساب کاربری من"
  liDecktop.forEach((li) => {
    if (li.textContent.trim() === "حساب کاربری من") {
      li.classList.add("text-blue-700");
      toggleSections(informationuser, "حساب کاربری من");
      saidbarMobile.classList.remove("hidden");
      saidbarMobile.classList.add("block");
    }
  });

  liDecktop.forEach((li) => {
    li.addEventListener("click", () => {
      // حذف کلاس از همه آیتم‌ها
      liDecktop.forEach((item) => item.classList.remove("text-blue-700"));

      // اضافه کردن کلاس به آیتم فعال
      li.classList.add("text-blue-700");

      // مدیریت نمایش بر اساس متن آیتم
      const text = li.textContent.trim();
      switch (text) {
        case "سفارش های من":
          toggleSections(myWallet, "سفارش های من");
          saidbarMobile.classList.remove("hidden");
          saidbarMobile.classList.add("block");
          break;
        case "حساب کاربری من":
          toggleSections(informationuser, "حساب کاربری من");
          saidbarMobile.classList.remove("hidden");
          saidbarMobile.classList.add("block");
          break;
        case "مدیریت کیف پول":
          toggleSections(null, "مدیریت کیف پول");
          saidbarMobile.classList.remove("hidden");
          saidbarMobile.classList.add("block");
          break;
        case "نظرات من":
          toggleSections(myComments, "نظرات من");
          saidbarMobile.classList.remove("hidden");
          saidbarMobile.classList.add("block");
          break;
        case "تیکت":
          toggleSections(tickets, "تیکت");
          saidbarMobile.classList.remove("hidden");
          saidbarMobile.classList.add("block");
          break;
      }
    });
  });
});

// نشان دادن مقادیر خریداری شده
function shoMyShop() {
  myWallet.classList.add("hidden");
  myWallet.classList.remove("block");
}

// فعال کردن سایدبار موبایل
document.addEventListener("DOMContentLoaded", () => {
  const sections = {
    "حساب کاربری من": {
      show: [boxMobile1, boxMobile2],
      hide: [tickets, myComments, myWallet],
      title: "حساب کاربری من",
    },
    "مدیریت کیف پول": {
      show: [],
      hide: [boxMobile1, boxMobile2, tickets, myComments, myWallet],
      title: "مدیریت کیف پول",
    },
    "سفارش های من": {
      show: [myWallet],
      hide: [boxMobile1, boxMobile2, tickets, myComments],
      title: "سفارش های من",
    },
    "نظرات من": {
      show: [myComments],
      hide: [tickets, myWallet, boxMobile1, boxMobile2],
      title: "نظرات من",
    },
    تیکت: {
      show: [tickets],
      hide: [myComments, myWallet, boxMobile1, boxMobile2],
      title: "تیکت",
    },
  };

  const toggleSection = (sectionName) => {
    const { show, hide, title } = sections[sectionName];
    show.forEach((el) => {
      el.classList.remove("hidden");
      el.classList.add("block");
    });
    hide.forEach((el) => {
      el.classList.add("hidden");
      el.classList.remove("block");
    });
    titlePage.innerText = title;
  };

  liMobile.forEach((li) => {
    if (li.textContent.trim() === "حساب کاربری من") {
      li.classList.add("text-blue-700");
      toggleSection("حساب کاربری من");
    }

    li.addEventListener("click", () => {
      liMobile.forEach((otherLi) => otherLi.classList.remove("text-blue-700"));
      li.classList.add("text-blue-700");
      const sectionName = li.textContent.trim();
      if (sections[sectionName]) {
        toggleSection(sectionName);
      }
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

// --------------------------------------------------------------------------------------------
const closeBack = () => {
  modal1.classList.remove("block");
  modal1.classList.add("hidden");
  boxContainer.classList.remove("hidden");
  boxContainer.classList.add("block");
};
