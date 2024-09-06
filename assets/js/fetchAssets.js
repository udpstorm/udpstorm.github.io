const DISCORD_USER_ID = '1158429903629336646';
const LANYARD_API_URL = `https://api.lanyard.rest/v1/users/${DISCORD_USER_ID}`;

fetch(LANYARD_API_URL)
  .then(response => response.json())
  .then(data => {
    const userData = data.data.discord_user;
    let avatarUrl = '';

    if (userData.avatar) {
      const avatarFormat = userData.avatar.startsWith('a_') ? 'gif' : 'png';  // Check if it's a GIF
      avatarUrl = `https://cdn.discordapp.com/avatars/${DISCORD_USER_ID}/${userData.avatar}.${avatarFormat}`;
    } else {
      // If no custom avatar, use default avatar
      avatarUrl = `https://cdn.discordapp.com/embed/avatars/${parseInt(userData.discriminator) % 5}.png`;
    }

    document.getElementById('dc-pfp').src = avatarUrl;
    document.getElementById('short-icon').href = avatarUrl;
  })
  .catch(error => console.error('Error fetching Discord avatar:', error));