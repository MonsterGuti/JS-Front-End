function manageGuild(input) { 
    let memberCount = Number(input.shift());
    const guild = {};

    for (let i = 0; i < memberCount; i++) {
        const memberInfo = input.shift();
        const [name, role, skillPart] = memberInfo.split(' ');
        const skills = skillPart.split(',');

        guild[name] = {
            role: role,
            skills: skills
        };
    }

    let commandLine = input.shift();

    while (commandLine !== 'End') {
        const parts = commandLine.split(' / ');
        const action = parts[0];
        const memberName = parts[1];

        if (action === 'Perform') {
            const role = parts[2];
            const skill = parts[3];

            const member = guild[memberName];
            const isCorrectRole = member.role === role;
            const hasSkill = member.skills.includes(skill);

            if (isCorrectRole && hasSkill) {
                console.log(`${memberName} has successfully performed the skill: ${skill}!`);
            } else {
                console.log(`${memberName} cannot perform the skill: ${skill}.`);
            }
        } 
        else if (action === 'Reassign') {
            const newRole = parts[2];
            
            guild[memberName].role = newRole;
            console.log(`${memberName} has been reassigned to: ${newRole}`);
        }
        else if (action === 'Learn Skill') {
            const newSkill = parts[2];

            const member = guild[memberName];
            if (member.skills.includes(newSkill)) {
                console.log(`${memberName} already knows the skill: ${newSkill}.`);
            } else {
                member.skills.push(newSkill);
                console.log(`${memberName} has learned a new skill: ${newSkill}.`);
            }
        }
        
        commandLine = input.shift();
    }

    for (const name in guild) {
        const member = guild[name];
        const sortedSkills = member.skills.sort((a, b) => a.localeCompare(b)).join(', ');
        console.log(`Guild Member: ${name}, Role: ${member.role}, Skills: ${sortedSkills}`);
    }
}