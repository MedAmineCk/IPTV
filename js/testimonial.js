// Define the array of objects that stores the recommendations
const recommendations = [
  {
    id: 1,
    referee: "سارة",
    profile: "./img/referees/profile_1.jpeg",
    recommendation: `
    اشكر صاحب الموقع على الباقة المجانية، كما اشكر فريق الدعم على التواصل الدائم`,
    role: "أستاذة",
  },
  {
    id: 2,
    referee: "نور",
    profile: "./img/referees/profile_2.jpeg",
    recommendation: `لم اكن اتوقع ان هناك موقع يوفر باقات مجانية، حتى تصادفت مع هاد الموقع، الموقع موثوق فعند انتهائك من المهمة البصيطة يرسلون لك الباقة فورا`,
    role: "ممرضة",
  },
  {
    id: 3,
    referee: "ابراهيم احمد",
    profile: "./img/referees/profile_3.jpeg",
    recommendation: `شكرا على الباقات المجانية، قنوات كثيرة و بجودة عالية و بدون تقطع، و الله روعة`,
    role: "مقاول",
  },
];

// Create a jQuery module for each recommendation
function displayReferees() {
  var isFirst = true;
  const modules = $.map(recommendations, function (recommendation) {
    var isActive = isFirst ? "active" : "";
    const module = `
         <div class="item ${isActive}" onclick="displayRecommendation(this, ${recommendation.id})">
            <div class="avatar" style="background-image: url('${recommendation.profile}');"></div>
            <div class="user_info">
              <div class="user_name">${recommendation.referee}</div>
              <div class="desc">${recommendation.role}</div>
            </div>
          </div>
      `;
    isFirst = false;
    return module;
  });

  // Add the modules to the HTML document
  $("#referees-display").append(modules);
}

// Display the recommendation for a given ID
function displayRecommendation(_this, id) {
  $("#referees-display .item").removeClass("active");
  $(_this).addClass("active");
  const selectedRecommendation = recommendations.find((r) => r.id === id);
  $("#recommendation-display").text(selectedRecommendation.recommendation);
}

// Call the displayReferees() function to display the modules for each referee
displayReferees();
