import React from "react";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/moduleData";

const AppProcess = () => {
    const [applications] = modules.filter(
        (module) => module.title === "Application Process"
    );
    return (
        <ModuleContent
            title={applications.title}
            description={applications.description}
            image={applications.image}
        />
    );
};

export default AppProcess;
