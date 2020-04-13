import React from "react";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/moduleData";

const WhatToWear = () => {
    const [clothing] = modules.filter(
        (module) => module.title === "What to Wear"
    );
    return (
        <ModuleContent
            title={clothing.title}
            description={clothing.description}
            image={clothing.image}
        />
    );
};

export default WhatToWear;
