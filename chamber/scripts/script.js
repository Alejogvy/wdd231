// Fetch and display members
async function fetchMembers() {
    const response = await fetch('data/members.json');
    const members = await response.json();
    displayMembers(members, 'grid');
}

// Toggle between grid and list views
document.getElementById('toggleView').addEventListener('click', () => {
    const section = document.getElementById('members');
    const isGrid = section.classList.contains('grid');
    section.className = isGrid ? 'list' : 'grid';
});

// Display members dynamically
function displayMembers(members, view) {
    const section = document.getElementById('members');
    section.innerHTML = '';
    section.className = view;

    members.forEach(member => {
        const div = document.createElement('div');
        div.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <h3>${member.name}</h3>
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <a href="${member.website}">Visit Website</a>
        `;
        section.appendChild(div);
    });
}

// Display copyright year and last modified date
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

fetchMembers();
