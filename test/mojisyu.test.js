import { describe, assert, it } from "https://taisukef.github.io/denolib/nodelikeassert.mjs"

import Mojisyu from "../docs/mojisyu.mjs"
import defaultMojisyu from "../docs/default_mojisyu.mjs"

describe("Mojisyu", () => {
    const mZE = new Mojisyu("ZE", defaultMojisyu.ZE);
    const mHS = new Mojisyu("HS", defaultMojisyu.HS);

    it("range type", () => {
        assert.ok(mZE.types.range, "range");
        assert.ok(!mZE.types.regexp, "regexp");
    });

    it("range property", () => {
        assert.ok(mZE.props.start);
        assert.ok(mZE.props.end);
        assert.ok(!mZE.props.regexp);
    });

    it("regexp type", () => {
        assert.ok(!mHS.types.range, "range");
        assert.ok(mHS.types.patterns, "patterns");
    });
});
