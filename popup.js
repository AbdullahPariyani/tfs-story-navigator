document.addEventListener('DOMContentLoaded', function() {
  // Elements
  const tfsInput = document.getElementById('tfsNumber');
  const supportInput = document.getElementById('supportNumber');
  const tfsGoBtn = document.getElementById('tfsGo');
  const supportGoBtn = document.getElementById('supportGo');

  // Focus TFS input on load
  tfsInput.focus();

  // TFS Navigation
  tfsGoBtn.addEventListener('click', () => {
    const storyNumber = tfsInput.value.trim();
    if (storyNumber) {
      window.open(`http://tfs/DefaultCollection/Motor%20Track/_workitems/edit/${storyNumber}`, '_blank');
    }
  });

  // Support Ticket Navigation
  supportGoBtn.addEventListener('click', () => {
    const ticketNumber = supportInput.value.trim();
    if (ticketNumber) {
      window.open(`https://support.malath.com.sa/ui/changes?entity_id=${ticketNumber}&mode=detail#Planning/details`, '_blank');
    }
  });

  // Allow Enter key to submit
  tfsInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') tfsGoBtn.click();
  });

  supportInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') supportGoBtn.click();
  });
});