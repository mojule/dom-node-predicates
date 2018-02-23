const predicates = require( '..' )
const assert = require( 'assert' )
const jsdom = require( 'jsdom' )

const { JSDOM } = jsdom
const dom = new JSDOM()

const nodes = {
  document: dom.window.document,
  element: dom.window.document.createElement( 'div' ),
  processingInstruction: dom.window.document.createProcessingInstruction( 'hello', 'world' ),
  text: dom.window.document.createTextNode( 'text' ),
  comment: dom.window.document.createComment( 'hello' ),
  documentType: dom.window.document.implementation.createDocumentType( 'html', null, null ),
  documentFragment: dom.window.document.createDocumentFragment()
}

const names = Object.keys( nodes )

describe( 'dom-node-predicates', () => {
  names.forEach( name => {
    const others = names.filter( n => n !== name )

    it( name, () => {
      assert( predicates[ name ]( nodes[ name ] ) )

      others.forEach( other => {
        assert( !predicates[ name ]( nodes[ other ] ) )
      })

      assert( !predicates[ name ]() )
    })
  })
})
