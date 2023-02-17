import { Log } from "../log.mjs";

const spec = {
    content: 'block+',
    group: 'block',
    defining: true,
    parseDOM: [{tag: 'section', getAttrs: el => {
        if (!el.classList.contains('readaloud')) return false;
    }}],
    toDOM: () => ['section', {class: 'readaloud'}, 0]
};

export default class ReadAloudText {
    static init() {
        Log.info('Adding ReadAloudText to the ProseMirror schema ');
        const nodes = ProseMirror.defaultSchema.spec.nodes.addBefore('header', 'readaloud', spec);
        const marks = ProseMirror.defaultSchema.spec.marks;
        const schema = new ProseMirror.Schema({nodes, marks});
        ProseMirror.defaultSchema = schema;
    }

    static setupDropdownMenu(menu, config) {
        Log.info('Adding ReadAloud to the ProseMirror formatting dropdowns');
        config.format.entries.find(v => v.action == 'block').children.push({
            action: 'readaloud',
            title: 'PMX.Blocks.ReadAloud',
            node: ProseMirror.defaultSchema.nodes.readaloud,
            cmd: (state, dispatch) => {
                menu._toggleBlock(ProseMirror.defaultSchema.nodes.readaloud, ProseMirror.commands.wrapIn);
            }
        });
    }
}
