async function fetch() {
  try {
    const response = await fetchNewList(
      'https://stackblitz.com/edit/json-server-pwzta9'
    );
    if (!response.ok) {
      throw new Error('PracticumError1');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('PracticumError1', error.message);
  }
}

function addToList(courses) {
  const menu = document.querySelector('[data-cy="course_select"]');

  while (menu.options.length > 1) {
    menu.remove(1);
  }
  courses.forEach((course) => {
    const menuOption = new Option(course.name, course.id);
    menu.appendChild(option);
  });
}

document.addEventListener('DOMContentLoaded', async () => {
  const courses = await fetchNewList();
  if (courses) {
    addToList(courses);
  }
});
