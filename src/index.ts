import {
  ELEMENT_NODE, PROCESSING_INSTRUCTION_NODE, TEXT_NODE, COMMENT_NODE,
  DOCUMENT_NODE, DOCUMENT_TYPE_NODE, DOCUMENT_FRAGMENT_NODE,
} from './node-types'

export const element = ( value ) : value is Element =>
  value && value.nodeType === ELEMENT_NODE

export const processingInstruction = ( value ) : value is ProcessingInstruction =>
  value && value.nodeType === PROCESSING_INSTRUCTION_NODE

export const text = ( value ) : value is Text =>
  value && value.nodeType === TEXT_NODE

export const comment = ( value ) : value is Comment =>
  value && value.nodeType === COMMENT_NODE

export const document = ( value ) : value is Document =>
  value && value.nodeType === DOCUMENT_NODE

export const documentType = ( value ) : value is DocumentType =>
  value && value.nodeType === DOCUMENT_TYPE_NODE

export const documentFragment = ( value ) : value is DocumentFragment =>
  value && value.nodeType === DOCUMENT_FRAGMENT_NODE

export const node = ( value ) : value is Node =>
  element( value ) || processingInstruction( value ) || text( value ) ||
  comment( value ) || document( value ) || documentType( value ) ||
  documentFragment( value )
