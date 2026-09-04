/*
  سرعت تایپ از همین چهار عدد کنترل می‌شه.
  هرچی عدد بزرگ‌تر باشه، تایپ آروم‌تره.
*/
const typingSpeed = {
  introTitle: 65,
  introText: 40,
  storyTitle: 40,
  storyText: 15
};

const copy = {
  page1: {
    title: "سلام مری جونم",
    text: "به جایی که فقط برای تو ساختم خوش اومدی…"
  },
  page2: {
    title: "حرفایی که باید زودتر می‌گفتم…",
    text: "مری، خیلی وقته حرفای زیادی توی دلمه، ولی هر بار نمی‌دونستم از کجا شروع کنم و چی بگم که دوباره همه‌چی رو بدتر نکنه.\n\nاین سایت رو ساختم تا برای یه بار هم که شده، بدون اینکه حرفام نصفه بمونه، همه‌چی رو همون‌جوری که توی دلمه بهت بگم.\n\nنمی‌خوام ازت بخوام گذشته رو فراموش کنی یا ناراحتیت رو نادیده بگیری.\n\nفقط می‌خوام چند دقیقه بهم فرصت بدی و تا آخر این چند صفحه همراهم باشی؛ ببینی توی این مدت چی توی من گذشته، چه چیزایی رو فهمیدم و امروز با چه حرفی برگشتم."
  },
  page3: {
    title: "این اتفاق منو بیدار کرد…",
    text: "مری، نمی‌خوام برگردم و دوباره درباره‌ی اون روز حرف بزنم.\n\nگذشته گذشته، ولی این برای من به این معنی نیست که راحت از کنارش رد بشم. بعضی چیزا باید درست بشه و من دارم این درست‌کردن رو از خودم شروع می‌کنم.\n\nاین اتفاق برای من یه تلنگر جدی بود. خیلی از چیزایی که قبلاً بهم می‌گفتی و شاید اون موقع اون‌جوری که باید جدی نمی‌گرفتم، الان دارم با تمام وجودم می‌فهمم.\n\nدارم روی رفتارم، اخلاقم، نوع پوششم، بدنم، درسم و کارم جدی‌تر کار می‌کنم. هر روز میرم باشگاه، برنامه‌نویسی یاد می‌گیرم و برای ساختن یه آینده‌ی بهتر تلاش می‌کنم.\n\nنمی‌خوام بگم یه‌شبه آدم دیگه‌ای شدم یا الان دیگه هیچ ایرادی ندارم؛ ولی این بار تغییرکردن فقط یه حرف نیست.\n\nفهمیدم وقتی یکی واقعاً برام ارزشمنده، این ارزش باید توی رفتار و عملم معلوم باشه. تو برای من خیلی باارزشی و نمی‌خوام اشتباه‌های گذشته دوباره بینمون تکرار بشه."
  },
  page4: {
    title: "چرا هنوز تو…",
    text: "مری، بین همه‌ی چیزایی که تو رو برای من خاص می‌کنه، مهربونیت همیشه یه جای دیگه داشته.\n\nمهربونی تو فقط یه اخلاق خوب نبود؛ چیزی بود که کنارت بهم آرامش می‌داد.\n\nهنوز اولین باری که دستتو گرفتم یادمه. شاید از بیرون یه لحظه‌ی ساده بود، ولی برای من اصلاً ساده نبود. همون لحظه یه حسی رو تجربه کردم که قبل از تو تجربه نکرده بودم.\n\nمن کنار تو فقط خوشحال نبودم؛ عاشق بودم. حس عشق رو فقط کنار تو شناختم و هنوزم وقتی به عشق فکر می‌کنم، اولین و آخرین کسی که میاد توی ذهنم تویی.\n\nاین مدت و این فاصله نتونسته ارزش تو رو برای من کم کنه. تو هنوزم همون آدمی هستی که دلم می‌خواد باهاش یه شروع درست، قشنگ و موندگار بسازم."
  },
  page5: {
    title: "اولین چیزی که ساختم، برای توئه…",
    text: "تو این پنج ماه شاید چیزی که از من دیدی فقط سکوت بود، ولی پشت اون سکوت، من هر روز داشتم تلاش می‌کردم.\n\nبرنامه‌نویسی رو جدی شروع کردم و خیلی از شبا تا صبح پای کد نشستم. بارها کدم خراب شد، خیلی چیزا رو نفهمیدم، خسته شدم، ولی دوباره از اول شروع کردم.\n\nمی‌خواستم بتونم روی پای خودم وایسم، از کاری که دوستش دارم به درآمد برسم و برای آینده‌ام یه مسیر درست بسازم.\n\nاین سایت اولین سایتیه که توی زندگیم ساختم. می‌تونست درباره‌ی هر چیزی باشه، ولی دلم می‌خواست اولین چیزی که با دستای خودم می‌سازم، فقط برای تو باشه.\n\nاینارو نمی‌گم که منتی بذارم یا بگم چون تلاش کردم، تو باید برگردی. فقط می‌خوام بدونی توی تمام این مدت فراموشت نکردم و فکر تو یکی از مهم‌ترین انگیزه‌هام برای ادامه‌دادن بود.\n\nاین سایت برای من فقط چند صفحه و چند خط کد نیست؛ نتیجه‌ی ذوق، شوق و تلاشی‌یه که از ته دلم شروعش کردم.\n\nمی‌خوام وقتی می‌بینیش، بدونی که تو برای من چقدر مهمی."
  },
  page6: {
    title: "حرفاتو شنیدم…",
    text: "مری، می‌دونم همه‌ی حرفاتو زدی و لازم نیست دوباره چیزایی رو که ناراحتت کرده برام توضیح بدی.\n\nشاید اون موقع اون‌جوری که باید حرفاتو نفهمیدم، ولی الان می‌دونم چیزی که از من لازم داری فقط چند تا جمله‌ی قشنگ نیست؛ باید تغییرم رو توی رفتارم ببینی.\n\nآخر این نامه فقط دو انتخاب گذاشتم. اگه حس می‌کنی هنوز می‌شه از نو یه رابطه‌ی بهتر ساخت، می‌تونی همون شروع تازه رو انتخاب کنی. اگه هم فقط حرفی توی دلت مونده که می‌خوای بهم بگی، می‌تونی همون رو بنویسی.\n\nهر چیزی انتخاب کنی، بدون بحث و بدون فشار بهش احترام می‌ذارم."
  },
  page7: {
    title: "این بار یه شروع جدید…",
    text: "مری، نمی‌خوام ازت بخوام برگردیم و همون رابطه‌ی قبلی رو از همون جایی که قطع شد ادامه بدیم.\n\nچیزی که ازت می‌خوام فقط یه برگشت ساده نیست. می‌خوام اگه تو هم بخوای، از نو یه رابطه‌ی جدید بینمون بسازیم؛ رابطه‌ای که توش هدف داشته باشیم، بیشتر باهم حرف بزنیم، همدیگه رو بهتر بفهمیم و وقتی اوضاع سخت شد، کنار هم بمونیم، نه اینکه از هم دور بشیم.\n\nگذشته‌مون رو انکار نمی‌کنم. اون گذشته برای من یه تجربه‌ی جدی شد تا بفهمم کجاها اشتباه کردم و چه چیزایی باید تغییر کنه.\n\nنمی‌خوام فقط بگم عوض شدم؛ می‌خوام فرصت داشته باشم آروم‌آروم با رفتارم نشونت بدم.\n\nهنوزم انتخاب من تویی. این بار نه برای تکرار گذشته؛ برای یه شروع بهتر، قشنگ‌تر و هدفمند که دوتایی برای موندنش تلاش کنیم.",
    proposalTitle: "مری، حاضری از نو یه رابطه‌ی بهتر و هدفمند رو باهم شروع کنیم؟",
    proposalText: "نه ادامه‌ی گذشته؛ شروع یه مسیر جدید که این بار آگاهانه باهم می‌سازیمش."
  }
};

/*
  هر انتخاب صفحه‌ی ششم، پایان مخصوص خودش را دارد.
  متن، سؤال نهایی، دکمه‌ها و جواب پایانی از این بخش کنترل می‌شوند.
*/
const choiceFlows = {
  restart: {
    chapter: "آخرین صفحه · دعوت من",
    title: copy.page7.title,
    text: copy.page7.text,
    proposalTitle: copy.page7.proposalTitle,
    proposalText: copy.page7.proposalText,
    continueLabel: "بریم برای یه شروع تازه",
    yesLabel: "از نو شروع کنیم",
    thinkLabel: "بذار فکر کنم",
    yesResponse: "مری، همین یه فرصت برای من خیلی باارزشه. قرار نیست فقط با حرف جلو برم؛ از اینجا به بعد باید با رفتارم ثابتش کنم.",
    thinkResponse: "باشه مری. عجله‌ای نیست. هرچقدر زمان لازم داری، بهش احترام می‌ذارم. ممنونم که تا آخر حرفامو خوندی."
  },
  message: {
    chapter: "آخرین صفحه · حرف تو",
    title: "این بار نوبت حرف توئه…",
    text: "مری، شاید بین همه‌ی این صفحه‌ها چیزی توی دلت مونده که جوابش توی گزینه‌های آماده جا نمی‌شه.\n\nهر چیزی که نوشتی، حتی اگه تلخ باشه یا چیزی نباشه که دلم می‌خواد بشنوم، برای من محترمه. نمی‌خوام حرفت رو عوض کنم یا بابتش باهات بحث کنم.\n\nهر وقت خودت خواستی، همون حرف رو از راهی که راحت‌تری برام بفرست. قول می‌دم با دقت بخونمش و قبل از جواب‌دادن واقعاً بهش فکر کنم.",
    proposalTitle: "هر چیزی توی دلت مونده، همون‌جوری که هست برام بفرست.",
    proposalText: "حرفت قرار نیست همین‌جا گم بشه؛ هر وقت آماده بودی، خودت از راهی که راحت‌تری برام می‌فرستیش.",
    continueLabel: "حرفم رو ادامه می‌دم",
    yesLabel: "خودم برات می‌فرستم",
    thinkLabel: "فعلاً پیش خودم بمونه",
    yesResponse: "باشه مری. هر وقت فرستادیش، با حوصله و بدون قضاوت می‌خونمش. ممنونم که حرفت رو باهام در میون می‌ذاری.",
    thinkResponse: "باشه مری. لازم نیست چیزی رو قبل از وقتی که خودت آماده‌ای بگی. به تصمیمت احترام می‌ذارم."
  }
};

const pages = [...document.querySelectorAll(".page")];
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.body.classList.add("at-intro");

const toPersianNumber = (value) => String(value).replace(/\d/g, (digit) => "۰۱۲۳۴۵۶۷۸۹"[digit]);

function updateProgress(pageNumber) {
  progressBar.style.width = `${(pageNumber / pages.length) * 100}%`;
  progressText.textContent = `${toPersianNumber(pageNumber)} از ${toPersianNumber(pages.length)}`;
}

function showPage(pageNumber) {
  pages.forEach((page, index) => {
    const isActive = index === pageNumber - 1;
    page.hidden = !isActive;
    page.classList.toggle("active", isActive);
  });

  document.body.classList.toggle("at-intro", pageNumber === 1);
  updateProgress(pageNumber);
  window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
}

function typeWriter(element, message, speed) {
  const characters = Array.from(message);
  element.textContent = "";

  if (reduceMotion) {
    element.textContent = message;
    return Promise.resolve();
  }

  return new Promise((resolve) => {
    let index = 0;

    function typeNext() {
      if (index >= characters.length) {
        resolve();
        return;
      }

      element.textContent += characters[index];
      index += 1;
      window.setTimeout(typeNext, speed);
    }

    typeNext();
  });
}

function revealButton(button) {
  button.classList.add("show");
}

async function renderStory(pageNumber, titleElement, textElement, button, pageCopy) {
  showPage(pageNumber);
  button.classList.remove("show");
  await typeWriter(titleElement, pageCopy.title, typingSpeed.storyTitle);
  await typeWriter(textElement, pageCopy.text, typingSpeed.storyText);
  revealButton(button);
}

const startBtn = document.getElementById("startBtn");
const nextBtn = document.getElementById("nextBtn");
const page3Btn = document.getElementById("page3Btn");
const page4Btn = document.getElementById("page4Btn");
const page5Btn = document.getElementById("page5Btn");
const page6Btn = document.getElementById("page6Btn");

async function startIntro() {
  await typeWriter(document.getElementById("title"), copy.page1.title, typingSpeed.introTitle);
  await typeWriter(document.getElementById("text"), copy.page1.text, typingSpeed.introText);
  revealButton(startBtn);
}

startIntro();

startBtn.addEventListener("click", () => {
  startBtn.disabled = true;
  document.getElementById("page1").classList.add("leaving");

  window.setTimeout(async () => {
    showPage(2);
    await typeWriter(document.getElementById("letterTitle"), copy.page2.title, typingSpeed.storyTitle);
    await typeWriter(document.getElementById("letterText"), copy.page2.text, typingSpeed.storyText);
    revealButton(nextBtn);
  }, reduceMotion ? 20 : 980);
});

nextBtn.addEventListener("click", () => {
  renderStory(3, document.getElementById("page3Title"), document.getElementById("page3Text"), page3Btn, copy.page3);
});

page3Btn.addEventListener("click", () => {
  renderStory(4, document.getElementById("page4Title"), document.getElementById("page4Text"), page4Btn, copy.page4);
});

page4Btn.addEventListener("click", () => {
  renderStory(5, document.getElementById("page5Title"), document.getElementById("page5Text"), page5Btn, copy.page5);
});

const choiceButtons = [...document.querySelectorAll(".choice-btn")];
const messageLabel = document.getElementById("messageLabel");
const maryMessage = document.getElementById("maryMessage");
const page7Chapter = document.getElementById("page7Chapter");
const proposalYes = document.getElementById("proposalYes");
const proposalThink = document.getElementById("proposalThink");
let selectedChoice = "";

const TELEGRAM_WORKER_URL =
  "https://young-fog-4863.chegeni45.workers.dev";

async function sendToTelegram(action, message = "") {
  try {
    const response = await fetch(TELEGRAM_WORKER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        action,
        message
      })
    });

    const result = await response.json();

    if (!result.ok) {
      console.error("Telegram Worker error:", result);
    }

    return result.ok;
  } catch (error) {
    console.error("Telegram connection error:", error);
    return false;
  }
}

function revealChoices() {
  choiceButtons.forEach((button, index) => {
    window.setTimeout(() => button.classList.add("choice-visible"), reduceMotion ? 0 : index * 150);
  });
}

page5Btn.addEventListener("click", async () => {
  showPage(6);
  page6Btn.classList.remove("show");
  await typeWriter(document.getElementById("page6Title"), copy.page6.title, typingSpeed.storyTitle);
  await typeWriter(document.getElementById("page6Text"), copy.page6.text, typingSpeed.storyText);
  revealChoices();
});

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    choiceButtons.forEach((item) => item.classList.remove("selected"));
    button.classList.add("selected");
    selectedChoice = button.dataset.choice;

    const wantsToWrite = selectedChoice === "message";
    messageLabel.hidden = !wantsToWrite;
    maryMessage.hidden = !wantsToWrite;

    if (wantsToWrite) {
      window.setTimeout(() => maryMessage.focus(), 100);
    }

    page6Btn.textContent = choiceFlows[selectedChoice].continueLabel;
    revealButton(page6Btn);
  });
});

page6Btn.addEventListener("click", async () => {
  if (!selectedChoice) return;

  try {
    localStorage.setItem("marySiteChoice", selectedChoice);
    if (selectedChoice === "message") {
      localStorage.setItem("marySiteMessage", maryMessage.value.trim());
    }

if (selectedChoice === "message") {
  await sendToTelegram(
    "💌 یه حرف از خودش",
    maryMessage.value.trim() || "پیامی نوشته نشده"
  );
}

  } catch (error) {
    // بازشدن نامه به حافظه‌ی مرورگر وابسته نیست.
  }

  showPage(7);
  const selectedFlow = choiceFlows[selectedChoice];
  const proposalBox = document.getElementById("proposalBox");
  const finalResponse = document.getElementById("finalResponse");
  proposalBox.hidden = true;
  proposalBox.classList.remove("show");
  finalResponse.hidden = true;
  finalResponse.textContent = "";

  page7Chapter.textContent = selectedFlow.chapter;
  await typeWriter(document.getElementById("page7Title"), selectedFlow.title, typingSpeed.storyTitle);
  await typeWriter(document.getElementById("page7Text"), selectedFlow.text, typingSpeed.storyText);

  document.getElementById("proposalTitle").textContent = selectedFlow.proposalTitle;
  document.getElementById("proposalText").textContent = selectedFlow.proposalText;
  proposalYes.textContent = selectedFlow.yesLabel;
  proposalThink.textContent = selectedFlow.thinkLabel;
  proposalBox.hidden = false;
  window.requestAnimationFrame(() => proposalBox.classList.add("show"));
});

function showFinalResponse(message) {
  const proposalBox = document.getElementById("proposalBox");
  const finalResponse = document.getElementById("finalResponse");
  proposalBox.hidden = true;
  finalResponse.textContent = message;
  finalResponse.hidden = false;
  finalResponse.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
}

proposalYes.addEventListener("click", async () => {
  if (!selectedChoice) return;

  try {
    localStorage.setItem("marySiteFinalResponse", `${selectedChoice}:yes`);
  } catch (error) {
    // نمایش نتیجه به حافظه‌ی مرورگر وابسته نیست.
  }

await sendToTelegram(
  "پاسخ نهایی: بله ❤️",
  choiceFlows[selectedChoice].yesResponse
);

  showFinalResponse(choiceFlows[selectedChoice].yesResponse);
});

proposalThink.addEventListener("click", async () => {
  if (!selectedChoice) return;

  try {
    localStorage.setItem("marySiteFinalResponse", `${selectedChoice}:think`);
  } catch (error) {
    // نمایش نتیجه به حافظه‌ی مرورگر وابسته نیست.
  }

await sendToTelegram(
  "پاسخ نهایی: فعلاً فکر می‌کنم 🤍",
  choiceFlows[selectedChoice].thinkResponse
);

  showFinalResponse(choiceFlows[selectedChoice].thinkResponse);
});
