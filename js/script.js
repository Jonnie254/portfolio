//Elements
const testimonialContainer = document.getElementById("testimonial-container");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

// testimonial data
const testimonials = [
  {
    name: "John lukas",
    job: "CEO, Amazon",
    image: "/images/john.jpg",
    comment:
      "Exceptional software engineer with a profound understanding of complex algorithms and data structures. His meticulous approach to problem-solving ensures the delivery of robust and efficient solutions.",
  },
  {
    name: "Jane Smith",
    job: "Senior Developer, Google",
    image: "/images/jane.jpg",
    comment:
      "Level of expertise in web development is unmatched. Her proficiency in front-end and back-end technologies, combined with her eye for detail, results in seamless and intuitive user experiences.",
  },
  {
    name: "David Johnson",
    job: "Data Scientist, Facebook",
    image: "/images/jack.jpg",
    comment:
      "Highly skilled data scientist known for his analytical prowess and innovative methodologies. His ability to derive actionable insights from complex datasets drives informed decision-making and enhances organizational performance.",
  },
];

//current testimonial
let currentItem = 0;
//Total number of testimonials
let totalTestimonials = testimonials.length;

// Add event listener to the next button
nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem >= totalTestimonials) {
    currentItem = 0;
  }
  displayTestimonial();
});
// Add event listener to the previous button
prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = totalTestimonials - 1;
  }
  displayTestimonial();
});

let displayTestimonial = () => {
  testimonialContainer.innerHTML = `
    <q><p>${testimonials[currentItem].comment}</p></q>
    <img src="${testimonials[currentItem].image}" alt="${testimonials[currentItem].name}">
    <h3>${testimonials[currentItem].name}</h3>
    <h6>${testimonials[currentItem].job}</h6>
    `;
};

window.onload = displayTestimonial();
