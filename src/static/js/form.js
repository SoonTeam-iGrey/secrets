console.log("script loaded boi");

let entryCount = {studiesContainer: 1, skillContainer: 1, courseContainer: 1, jobsContainer: 1};

function addEntry(containerId)
{
    entryCount[containerId]++;
    const container = document.getElementById(containerId);
    const entry = document.createElement('div');
    entry.classList.add('entry');

    const label = document.createElement('label');
    label.setAttribute('for', `${containerId.slice(0, -9)}${entryCount[containerId]}`);
    label.textContent = `${containerId.slice(0, -9)} ${entryCount[containerId]}:`;

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('id', `${containerId.slice(0, -9)}${entryCount[containerId]}`);
    input.setAttribute('name', `${containerId.slice(0, -9)}s[]`);
    input.setAttribute('required', true);

    entry.appendChild(label);
    entry.appendChild(input);

    container.appendChild(entry);
}

function addStudyEntry()
{
    entryCount['studiesContainer']++;
    const container = document.getElementById("studiesContainer");
    const entry = document.createElement('div');
    entry.classList.add('entry');

    const labelDegree = document.createElement('label');
    labelDegree.textContent = 'Degree:';
    const selectDegree = document.createElement('select');
    selectDegree.setAttribute('id', `degree${entryCount['studiesContainer']}`);
    selectDegree.setAttribute('name', 'degrees[]');
    const degreeOptions = ['Bachelors', 'Masters', 'PhD'];
    degreeOptions.forEach(optionText => {
        const option = document.createElement('option');
        option.textContent = optionText;
        selectDegree.appendChild(option);
    });

    const labelUniversity = document.createElement('label');
    labelUniversity.textContent = `University:`;
    const inputUniversity = document.createElement('input');
    inputUniversity.setAttribute('type', 'text');
    inputUniversity.setAttribute('id', `university${entryCount['studiesContainer']}`);
    inputUniversity.setAttribute('name', 'universities[]');
    inputUniversity.setAttribute('required', true);

    entry.appendChild(labelDegree);
    entry.appendChild(selectDegree);

    entry.appendChild(labelUniversity);
    entry.appendChild(inputUniversity);

    container.appendChild(entry);
}

function addSkillEntry(containerId) {
    console.log("add skill called");

    // Increment the skill entry count
    entryCount['skillContainer']++;

    // Get the container element
    const container = document.getElementById(containerId);

    // Create a new skill entry div
    const entry = document.createElement('div');
    entry.classList.add('entry');

    // Create label and input elements for the skill
    const labelSkill = document.createElement('label');
    labelSkill.textContent = `Skill:`;
    const inputSkill = document.createElement('input');
    inputSkill.setAttribute('type', 'text');
    inputSkill.setAttribute('id', `skill${entryCount['skillContainer']}`);
    inputSkill.setAttribute('name', 'skills[]');
    inputSkill.setAttribute('required', true);

    // Append label and input to the entry div
    entry.appendChild(labelSkill);
    entry.appendChild(inputSkill);

    // Append the new skill entry to the container
    container.appendChild(entry);
}

function addJobEntry()
{

    entryCount[jobsContainer]++;
    const container = document.getElementById("jobsContainer");
    const entry = document.createElement('div');
    entry.classList.add('entry');

    const labelCompany = document.createElement('label');
    labelCompany.textContent = 'Company:';
    const inputCompany = document.createElement('input');
    inputCompany.setAttribute('type', 'text');
    inputCompany.setAttribute('id', `company${entryCount['jobsContainer']}`);
    inputCompany.setAttribute('required', true);

    const labelBranch = document.createElement('label');
    labelBranch.textContent = `Branch:`;
    const selectBranch = document.createElement('select');
    selectBranch.setAttribute('id', `branches${entryCount['jobsContainer']}`);
    const branchOptions = ['backend', 'frontend', 'mobile developer', 'game developer', 'data science', 'AI', 'quality assurance', 'devops', 'cybersecurity', 'database administrator', 'networking', 'embedded'];
    branchOptions.forEach(optionText => {
        const option = document.createElement('option');
        option.textContent = optionText;
        selectBranch.appendChild(option);
    });

    const labelFromDate = document.createElement('label');
    labelFromDate.textContent = `Date of Employment:`;
    const inputFromDate = document.createElement('input');
    inputFromDate.setAttribute('type', 'date');
    inputFromDate.setAttribute('id', `fromDate${entryCount['jobsContainer']}`);
    inputFromDate.setAttribute('required', true);

    const labelToDate = document.createElement('label');
    labelToDate.textContent = `Date of Resignation:`;
    const inputToDate = document.createElement('input');
    inputToDate.setAttribute('type', 'date');
    inputToDate.setAttribute('id', `toDate${entryCount['jobsContainer']}`);
    inputToDate.setAttribute('required', true);

    container.appendChild(document.createElement('br'));
    entry.appendChild(labelCompany);
    entry.appendChild(inputCompany);

    entry.appendChild(labelBranch);
    entry.appendChild(selectBranch);
    entry.appendChild(document.createElement('br'));

    entry.appendChild(labelFromDate);
    entry.appendChild(inputFromDate);
    
    entry.appendChild(labelToDate);
    entry.appendChild(inputToDate);

    container.appendChild(entry);
}

function addCourseEntry(containerId) {
    console.log("add course called");

    // Increment the course entry count
    entryCount['courseContainer']++;

    // Get the container element
    const container = document.getElementById(containerId);

    // Create a new course entry div
    const entry = document.createElement('div');
    entry.classList.add('entry');

    // Create label and input elements for the course
    const labelCourse = document.createElement('label');
    labelCourse.textContent = `Course:`;
    const inputCourse = document.createElement('input');
    inputCourse.setAttribute('type', 'text');
    inputCourse.setAttribute('id', `course${entryCount['courseContainer']}`);
    inputCourse.setAttribute('name', 'courses[]');
    inputCourse.setAttribute('required', true);

    // Append label and input to the entry div
    entry.appendChild(labelCourse);
    entry.appendChild(inputCourse);

    // Append the new course entry to the container
    container.appendChild(entry);
}


function gatherFormData()
{
    console.log("gather form function called");
    const formData = {
        name: document.getElementById('name').value,
        studies:[],
        jobs: [],
        skills: [],
        courses: []
    }

    for(let i = 1; i <= entryCount['studiesContainer']; i++)
    {
        const degree = document.getElementById(`degree${i}`).value;
        const university = document.getElementById(`university${i}`).value;
        formData.studies.push({
            degree: degree,
            university: university
        });
    }

    for (let i = 1; i <= entryCount['jobsContainer']; i++) {
        const company = document.getElementById(`company${i}`).value;
        const branch = document.getElementById(`branches${i}`).value;
        const fromDate = document.getElementById(`fromDate${i}`).value;
        const toDate = document.getElementById(`toDate${i}`).value;
    
        formData.jobs.push({
            company: company,
            branch: branch,
            fromDate: fromDate,
            toDate: toDate
        });
    }
    
    for (let i = 1; i <= entryCount['skillContainer']; i++) {
        const skill = document.getElementById(`skill${i}`).value;
    
        formData.skills.push({
            skill: skill
        });
    }

    for (let i = 1; i <= entryCount['courseContainer']; i++) {
        const course = document.getElementById(`course${i}`).value;
    
        formData.courses.push({
            course: course
        });
    }
    return formData;
}

function convertToJson() {
    const formData = gatherFormData();
    const jsonData = JSON.stringify(formData);

    console.log(jsonData);
}