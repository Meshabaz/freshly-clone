import planNav from "../components/planNav.js";
import { cQues } from "../components/commonQuestions.js";

document.querySelector(".navbar").innerHTML = planNav();
document.querySelector(".comman_questions").innerHTML = cQues();
