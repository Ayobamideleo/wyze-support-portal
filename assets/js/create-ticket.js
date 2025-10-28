document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("createTicketForm");
  const modal = document.getElementById("successModal");
  const closeModalBtn = document.getElementById("closeModal");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const subject = document.getElementById("subject").value.trim();
    const category = document.getElementById("category").value;
    const priority = document.getElementById("priority").value;
    const description = document.getElementById("description").value.trim();

    if (!subject || !category || !priority || !description) {
      alert("Please fill out all required fields.");
      return;
    }

    // Show modal
    modal.style.display = "flex";

    // Reset form
    form.reset();
  });

  // Close modal button
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Close modal when clicking outside the modal content
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
