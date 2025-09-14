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

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(form);

    status.textContent = 'Sending...';
    status.style.color = 'black';

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        status.textContent = 'Thanks for your message! I will get back to you soon.';
        status.style.color = 'green';
        form.reset();
      } else {
        status.textContent = 'Oops! Something went wrong.';
        status.style.color = 'red';
      }
    } catch (error) {
      status.textContent = 'Error submitting the form. Please try again later.';
      status.style.color = 'red';
      console.error(error);
    }
  });
});

