// Define the array of objects that stores the recommendations
const recommendations = [
  {
    id: 1,
    referee: "Sarah",
    profile: "./img/referees/29.jpg",
    recommendation: `
    I thank the website owner for the free package, and I appreciate the support team for their constant communication.`,
    role: "Professor",
  },
  {
    id: 2,
    referee: "Emily",
    profile: "./img/referees/47.jpg",
    recommendation: `I didn't expect there to be a website that provides free packages until I came across this website. The website is reliable, as they send you the package immediately after completing the simple task.`,
    role: "Nurse",
  },
  {
    id: 3,
    referee: "Michael",
    profile: "./img/referees/63.jpg",
    recommendation: `Thank you for the free packages. There are many channels with high quality and no interruptions. It's amazing, I swear.`,
    role: "Contractor",
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
