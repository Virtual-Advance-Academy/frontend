import React from "react";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/modules";

const InternshipTypes = () => {
    const [internships] = modules.filter(
        (module) => module.title === "Types of Internships"
    );
    return (
        <ModuleContent
            title={internships.title}
            description={internships.description}
            image={internships.image}
        />
    );
};

export default InternshipTypes;
