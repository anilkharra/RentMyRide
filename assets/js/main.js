// ==========================================================
// RentMyRide — shared site behaviour
// EDITABLE: change WHATSAPP_NUMBER below to update every
// WhatsApp button/link and the enquiry form across the site.
// ==========================================================
const WHATSAPP_NUMBER = "919999999999"; // <-- put your WhatsApp number here (with country code, no + or spaces)

document.addEventListener("DOMContentLoaded", () => {
  // mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => nav.classList.toggle("open"));
  }

  // footer year
  document.querySelectorAll("[data-year]").forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  // wire up any element with data-wa-link to the WhatsApp number
  document.querySelectorAll("[data-wa-link]").forEach(el => {
    const msg = el.getAttribute("data-wa-link") || "Hi RentMyRide, I'd like to plan a Nashik trip.";
    el.setAttribute("href", `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`);
  });

  // enquiry forms -> build a WhatsApp message from the fields and open WhatsApp
  document.querySelectorAll("form[data-enquiry-form]").forEach(form => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const get = (k) => (data.get(k) || "").toString().trim();

      const lines = [
        "Hi RentMyRide, I'd like to plan a trip.",
        get("name") ? `Name: ${get("name")}` : "",
        get("phone") ? `Phone: ${get("phone")}` : "",
        get("package") ? `Interested in: ${get("package")}` : "",
        get("pickup") ? `Pickup location: ${get("pickup")}` : "",
        get("date") ? `Travel date: ${get("date")}` : "",
        get("travellers") ? `Travellers: ${get("travellers")}` : "",
        get("details") ? `Details: ${get("details")}` : "",
      ].filter(Boolean).join("\n");

      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines)}`, "_blank");
    });
  });
});
