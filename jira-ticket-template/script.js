// Define the account options
const accounts = [
    "BallySports", "Bleacher", "Booking", "BusinessIntelligence", "Campari",
    "Clorox", "CNN", "Endeavor", "Facilities", "FedEx", "FEVO", "FIS", "WBD",
    "HumanResources", "IBM", "InsideOut", "KYAC", "Kyndryl", "LanSchool", "LoadSmart",
    "ManagersDirectors", "March-Madness-Live", "Marquee", "Motorola", "MSG-Evergent",
    "NBA", "NESN", "QualityAssurance", "Seasonal", "Showtime", "Siemens", "SmartStart",
    "Sonic", "Tempo", "WorkforceManagement", "WWE", "YesNetwork"
];

// Define the subcategories for Category 1
const subCategories = {
    "Amazon Connect": ["Breaking audio or echo", "No audio middle of the call", "Unable to hear", "Unable to answer calls", "Login issues"],
    "AVD": ["Black/Gray screen", "Slow", "Not loading/connecting", "Installation request"],
    "CATO": ["Network is slow inside CATO", "Connecting", "Installation request"],
    "SalesForce": ["Freezing", "Function not working properly", "Auto Refresh"],
    "Network ID issues": ["Locked", "Reset", "MFA"],
    "HH Device issue/Request": ["Broken peripherals", "Request replacement"],
    "BYOD issue": ["Internet issue due to storm", "Broken peripherals", "OS issue"],
    "Email/Teams/Sharepoint/O365": ["Access request", "Modification request", "Issue with application"],
    "Other applications": [] // No predefined options, will be a textbox
};

// Populate the account dropdown on page load
document.addEventListener('DOMContentLoaded', () => {
    const accountDropdown = document.getElementById('account');
    
    accounts.forEach(account => {
        const option = document.createElement('option');
        option.value = account;
        option.text = account;
        accountDropdown.add(option);
    });

    const category1Dropdown = document.getElementById('category1');
    for (let category in subCategories) {
        const option = document.createElement('option');
        option.value = category;
        option.text = category;
        category1Dropdown.add(option);
    }
});

// Populate Category 1 options when a channel is selected
function populateCategories() {
    const category1Dropdown = document.getElementById('category1');
    const category2Container = document.getElementById('category2-container');

    category1Dropdown.innerHTML = '<option value="">Select Category 1</option>'; // Clear current options

    for (let category in subCategories) {
        const option = document.createElement('option');
        option.value = category;
        option.text = category;
        category1Dropdown.add(option);
    }

    // Reset Category 2 to dropdown
    category2Container.innerHTML = '<select id="category2"><option value="">Select Category 2</option></select>';
}

// Update Category 2 based on selected Category 1
function updateSubCategories() {
    const category1 = document.getElementById('category1').value;
    const category2Container = document.getElementById('category2-container');

    if (category1 === "Other applications") {
        // Replace dropdown with textbox
        category2Container.innerHTML = '<input type="text" id="category2" placeholder="Describe the issue">';
    } else {
        // Restore dropdown
        const category2Dropdown = document.createElement('select');
        category2Dropdown.id = 'category2';
        category2Dropdown.innerHTML = '<option value="">Select Category 2</option>';

        if (category1 && subCategories[category1]) {
            subCategories[category1].forEach(subCat => {
                const option = document.createElement('option');
                option.value = subCat;
                option.text = subCat;
                category2Dropdown.add(option);
            });
        }

        category2Container.innerHTML = '';
        category2Container.appendChild(category2Dropdown);
    }
}

// Generate the Jira ticket title
function generateTitle() {
    const channel = document.getElementById('channel').value;
    const username = document.getElementById('username').value;
    const caseStatus = document.getElementById('caseStatus').value;
    const account = document.getElementById('account').value;
    const category1 = document.getElementById('category1').value;
    const category2 = document.getElementById('category2').value;

    const title = `${channel}/${username}/${caseStatus}/${account}/${category1}/${category2}`;
    document.getElementById('generatedTitle').innerText = title;
}

// Copy the generated title to the clipboard
function copyTitle() {
    const generatedTitle = document.getElementById('generatedTitle').innerText;

    if (generatedTitle) {
        navigator.clipboard.writeText(generatedTitle)
            .then(() => {
                alert('Title copied to clipboard!');
            })
            .catch(err => {
                console.error('Failed to copy text: ', err);
            });
    } else {
        alert('No title to copy.');
    }
}

// Toggle between dark mode and light mode
document.getElementById('modeToggle').addEventListener('click', () => {
    const body = document.body;
    const currentMode = body.classList.contains('dark-mode') ? 'dark' : 'light';
    
    if (currentMode === 'dark') {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        document.getElementById('modeToggle').innerText = 'Switch to Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        document.getElementById('modeToggle').innerText = 'Switch to Light Mode';
    }
});