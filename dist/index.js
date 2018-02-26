"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_types_1 = require("./node-types");
exports.element = (value) => value && value.nodeType === node_types_1.ELEMENT_NODE;
exports.processingInstruction = (value) => value && value.nodeType === node_types_1.PROCESSING_INSTRUCTION_NODE;
exports.text = (value) => value && value.nodeType === node_types_1.TEXT_NODE;
exports.comment = (value) => value && value.nodeType === node_types_1.COMMENT_NODE;
exports.document = (value) => value && value.nodeType === node_types_1.DOCUMENT_NODE;
exports.documentType = (value) => value && value.nodeType === node_types_1.DOCUMENT_TYPE_NODE;
exports.documentFragment = (value) => value && value.nodeType === node_types_1.DOCUMENT_FRAGMENT_NODE;
exports.node = (value) => exports.element(value) || exports.processingInstruction(value) || exports.text(value) ||
    exports.comment(value) || exports.document(value) || exports.documentType(value) ||
    exports.documentFragment(value);
//# sourceMappingURL=index.js.map