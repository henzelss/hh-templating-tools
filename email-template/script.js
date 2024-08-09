// Accounts dropdown options
const accounts = [
    "BallySports", "Bleacher", "Booking", "BusinessIntelligence", "Campari", 
    "Clorox", "CNN", "Endeavor", "Facilities", "FedEx", "FEVO", "FIS", "WBD", 
    "HumanResources", "IBM", "InsideOut", "KYAC", "Kyndryl", "LanSchool", 
    "LoadSmart", "ManagersDirectors", "March-Madness-Live", "Marquee", 
    "Motorola", "MSG-Evergent", "NBA", "NESN", "QualityAssurance", "Seasonal", 
    "Showtime", "Siemens", "SmartStart", "Sonic", "Tempo", "WorkforceManagement", 
    "WWE", "YesNetwork", "ph boardroom", "ph hotline"
];

// Populate account dropdown
const accountDropdown = document.getElementById('accountDropdown');
accounts.forEach(account => {
    const option = document.createElement('option');
    option.value = account;
    option.textContent = account;
    accountDropdown.appendChild(option);
});

function generateTemplate() {
    const supervisor = document.getElementById('supervisor').value;
    const user = document.getElementById('user').value;
    const account = document.getElementById('accountDropdown').value;
    const issue = document.getElementById('issue').value;
    const stepsTaken = document.getElementById('stepsTaken').value;
    const nextSteps = document.getElementById('nextStepsDropdown').value;
    const duration = document.getElementById('duration').value;
    const side = document.getElementById('sideDropdown').value;
    const rootCause = document.getElementById('rootCause').value;
    const connection = document.getElementById('connectionDropdown').value;
    const modemName = document.getElementById('modemNameTextbox').value;
    const os = document.getElementById('osDropdown').value;
    const version = document.getElementById('versionTextbox').value;
    const processor = document.getElementById('processorTextbox').value;
    const ram = document.getElementById('ramDropdown').value;
    const setup = document.getElementById('setupDropdown').value;
    const isp = document.getElementById('ispDropdown').value;
    const speed = document.getElementById('speedTextbox').value;
    const headsetType = document.getElementById('headsetTypeDropdown').value;
    const headsetName = document.getElementById('headsetNameTextbox').value;
    const ticket = document.getElementById('ticket').value;

    const template = `
Hi ${supervisor},

Name of Caller: ${user}
Account: ${account}
Issue: ${issue}

Steps Taken:
${stepsTaken.split('\n').map(step => `  *${step}`).join('\n')}
Next Steps: ${nextSteps}
Root Cause: ${rootCause}
Side: ${side}
Duration: ${duration}

Type of Internet Connection: ${connection}
Modem Name (brand): ${modemName}

OS: ${os}
Version: ${version}
Processor: ${processor}
RAM: ${ram}
Set up: ${setup}

ISP: ${isp}
Speed test results (with CATO): ${speed}
Ping test: N/A

Headset type: ${headsetType}
Headset name (brand): ${headsetName}

JSM Ticket: ${ticket}
    `.trim();

    document.getElementById('generatedTemplate').innerText = template;
}

function copyToClipboard() {
    const template = document.getElementById('generatedTemplate').innerText;
    if (template) {
        navigator.clipboard.writeText(template).then(() => {
            const copyButton = document.getElementById('copyButton');
            copyButton.innerText = 'Copied';
            copyButton.classList.add('copied');
            setTimeout(() => {
                copyButton.innerText = 'Copy';
                copyButton.classList.remove('copied');
            }, 2000); // Reset button text after 2 seconds
        });
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
