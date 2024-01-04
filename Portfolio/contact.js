document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const message = formData.get('message');
    
    console.log('Name:', name);
    console.log('Phone Number:', phone);
    console.log('Email:', email);
    console.log('Message:', message);
});
