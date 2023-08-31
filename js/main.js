// Handle catagory
const handleCatagory = async () => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/categories`
  );
  const data = await res.json();

  const catagoryData = data.data;
  console.log(catagoryData);
  const tabContainer = document.getElementById("tab-container");
  catagoryData.forEach((element) => {
    console.log(element?.category_id);
    const tabDiv = document.createElement("div");
    tabDiv.classList.add("tabs", "tabs-boxed", "font-bold");
    tabDiv.innerHTML = `
    <a onclick="handleCatagoryEvent('${element?.category_id}')" class="tab ">${element?.category}</a>
    `;
    tabContainer.appendChild(tabDiv);
  });
};

// show all catagory
const loadCatagory = async () => {
  const res = await fetch(`
  https://openapi.programming-hero.com/api/videos/category/1000`);
  const data = await res.json();

  const allCatagory = data.data;
  // console.log(allCatagory);
  displayAllCatagory(allCatagory);
  // displayPhone(phones, isShowMore);
};

const displayAllCatagory = (allCatagory) => {
  // console.log(allCatagory);
  const CardContainer = document.getElementById("card-container");
  allCatagory.forEach((element) => {
    console.log(element);
    const card = document.createElement("div");
    card.classList = "w-[314px]";
    card.innerHTML = `
    <img src="${element?.thumbnail}" alt="" class="w-[312px] h-[200px] rounded-lg" />
    <div class="flex gap-4 mt-4">
    <img
    src="${element?.authors[0]?.profile_picture}"
    alt=""
    class="w-[40px] h-[40px] rounded-full"
    />
    <div>
    <h4 class="text-primary font-bold">
    Building a Winning UX Strategy Using the Kano Model
    </h4>
    <p class="text-second my-2">${element?.authors[0]?.profile_name} <span>${element?.authors[0]?.verified}</span></p>
    <p class="text-second">${element?.others?.views} Views</p>
    </div>
    </div>
    `;
    CardContainer.appendChild(card);
  });
};
handleCatagory();
loadCatagory();
