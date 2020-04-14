import React from "react";
import ModuleContent from "../../shared/modules/ModuleContent";
import modules from "../../shared/modules/moduleData";

const DosAndDonts = () => {
    const [dosanddonts] = modules.filter(
        (module) => module.title === "The Do's & Don'ts"
    );
    return (
        <ModuleContent
            title={dosanddonts.title}
            description={dosanddonts.description}
            image={dosanddonts.image}
        />
    );
};

export default DosAndDonts;
