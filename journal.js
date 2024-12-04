
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});




////code2

// document.querySelectorAll('.sidebar a').forEach((link) => {
//   link.addEventListener('click', function (e) {
//     e.preventDefault(); 

//     const projectURL = this.getAttribute('data-link');

//     const contentDiv = document.getElementById('content');
//     contentDiv.innerHTML = `
//       <iframe 
//         src="${projectURL}" 
//         style="width: 100%; height: 100%; border: none;">
//       </iframe>`;
//   });
// });
