import ReadAloudText from "./scripts/extensions/ReadAloudText.mjs";
import { Log } from "./scripts/log.mjs";

(function main() {
    Hooks.on('init', ReadAloudText.init);
    Hooks.on('getProseMirrorMenuDropDowns', ReadAloudText.setupDropdownMenu);

    Hooks.on('ready', () => {
        Log.info('Repairing ProseMirror schema and dom objects');

        const parseString = ProseMirror.dom.parseString;
        ProseMirror.dom.parseString = (htmlString, schema) => parseString(htmlString, schema || ProseMirror.defaultSchema);
        const serializeString = ProseMirror.dom.serializeString;
        ProseMirror.dom.serializeString = (doc, {schema, spaces} = {}) => serializeString(doc, {schema: schema || ProseMirror.defaultSchema, spaces});
    });
})();