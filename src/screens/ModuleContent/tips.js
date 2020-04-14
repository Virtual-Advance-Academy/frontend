import React from "react";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/moduleData";

const Tips = () => {
    const [tips] = modules.filter(
        (module) => module.title === "Tips from the Pros"
    );
    return (
        <ModuleContent
            title={tips.title}
            description={tips.description}
            image={tips.image}
        />
    );
};

export default Tips;
