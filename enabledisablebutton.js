document.addEventListener('DOMContentLoaded', function() {
    const joinMeetingButton = document.getElementById('joinmeeting');
    const savedValuesList = document.getElementById('savedValuesList');

    // Function to check the list and enable/disable the button
    window.checkList = function() {
        if (savedValuesList.children.length > 0) {
            joinMeetingButton.disabled = false;
        } else {
            joinMeetingButton.disabled = true;
        }
    };
});