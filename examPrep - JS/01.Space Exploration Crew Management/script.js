function spaceCrew(input) {
    let crewCount = Number(input.shift());

    const crew = {};

    for (let i = 0; i < crewCount; i++) {
        const memberInfo = input.shift();

        const [name, section, skillsParts] = memberInfo.trim().split(/\s+/);
        const skills = skillsParts.split(',');

        crew[name] = {
            section,
            skills
        };
    }

    let commandLine = input.shift();

    while (commandLine !== 'End') {
        const parts = commandLine.split(' / ').map(x => x.trim());

        const action = parts[0];

        switch (action) {
            case 'Perform': {
                const name = parts[1];
                const section = parts[2];
                const skill = parts[3];

                const astronaut = crew[name];

                const isCorrectSection = astronaut.section === section;
                const doesHaveSkill = astronaut.skills.includes(skill);

                if (isCorrectSection && doesHaveSkill) {
                    console.log(
                        `${name} has successfully performed the skill: ${skill}!`
                    );
                } else {
                    console.log(
                        `${name} cannot perform the skill: ${skill}.`
                    );
                }

                break;
            }

            case 'Transfer': {
                const astronautName = parts[1];
                const newSection = parts[2];

                crew[astronautName].section = newSection;

                console.log(
                    `${astronautName} has been transferred to: ${newSection}`
                );

                break;
            }

            case 'Learn Skill': {
                const astronautName = parts[1];
                const newSkill = parts[2];

                const astronaut = crew[astronautName];

                if (astronaut.skills.includes(newSkill)) {
                    console.log(
                        `${astronautName} already knows the skill: ${newSkill}.`
                    );
                } else {
                    astronaut.skills.push(newSkill);

                    console.log(
                        `${astronautName} has learned a new skill: ${newSkill}.`
                    );
                }

                break;
            }
        }

        commandLine = input.shift();
    }

    for (const name in crew) {
        const astronaut = crew[name];

        const sortedSkills = astronaut.skills
            .sort((a, b) => a.localeCompare(b))
            .join(', ');

        console.log(
            `Astronaut: ${name}, Section: ${astronaut.section}, Skills: ${sortedSkills}`
        );
    }
}

spaceCrew([
  "2",
  "Alice command_module piloting,communications",
  "Bob engineering_bay repair,maintenance",
  "Perform / Alice / command_module / piloting",
  "Perform / Bob / command_module / repair",
  "Learn Skill / Alice / navigation",
  "Perform / Alice / command_module / navigation",
  "Transfer / Bob / command_module",
  "Perform / Bob / command_module / maintenance",
  "End"
]
)