// Enhanced form.js with Formspree support

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', async function (e) {
    e.preventDefault(); // Stop page reload

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        alert('Thanks for your message! I will get back to you soon.');
        form.reset();
      } else {
        alert('Oops! Something went wrong.');
      }
    } catch (error) {
      alert('Error submitting the form. Please try again later.');
      console.error(error);
    }
  });
});
