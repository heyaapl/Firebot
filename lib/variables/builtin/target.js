"use strict";


const {
    EffectTrigger
} = require("../../effects/models/effectModels");


/**
 * The $target variable
 */
const commmandTarget = {
    definition: {
        handle: "target",
        triggers: [EffectTrigger.COMMAND]
    },
    evaluator: (trigger, index) => {
        let args = trigger.metadata.userCommand.args || [];

        index = parseInt(index);

        console.log(args, index);
        if (args.length < index) {
            return null;
        }

        if (index != null && index > 0) {
            index--;
        } else {
            index = 0;
        }

        return args[index].replace("@", "");
    },
    argsCheck: (index) => {
        // index can be null
        if (index == null) return true;

        // index needs to be a number
        if (isNaN(index)) {
            throw new SyntaxError("Index needs to be a number.");
        }

        return true;
    }
};

module.exports = commmandTarget;