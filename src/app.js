// app.js
const propelAuth = new PropelAuth({
    projectId: 'FlareRed',  // Replace with your PropelAuth Project ID
  });
  

  // Check if the user is logged in when the page loads
window.onload = async function() {
    try {
      const user = await propelAuth.isAuthenticated();
      if (user) {
        document.getElementById('auth-buttons').classList.add('hidden');
        document.getElementById('user-info').classList.remove('hidden');
        document.getElementById('user-email').textContent = user.email;
      }
    } catch (error) {
      console.error('Error checking authentication:', error);
    }
  };
  
  // Login button
  document.getElementById('login-btn').addEventListener('click', function() {
    propelAuth.login();
  });
  
  // Signup button
  document.getElementById('signup-btn').addEventListener('click', function() {
    propelAuth.signup();
  });
  
  // Logout button
  document.getElementById('logout-btn').addEventListener('click', async function() {
    try {
      await propelAuth.logout();
      window.location.reload();  // Refresh the page after logout
    } catch (error) {
      console.error('Error during logout:', error);
    }
  });
  