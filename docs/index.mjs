import Moji from "./moji.mjs";
import defaultMojisyu from "./default_mojisyu.mjs";
import Mojisyu from "./mojisyu.mjs";

const mojisyu = {};

/**
 * @param {string} str
 * @return {Moji}
 */
function moji(str) {
    return new Moji(str, mojisyu);
}


moji.addMojisyu = (obj) => {
    Object.keys(obj).forEach((m) => {
        mojisyu[m] = new Mojisyu(m, obj[m]);
    });
};

moji.addMojisyu(defaultMojisyu);

/**
 * @param {String} str
 * @return {Moji}
 */
export { moji }
