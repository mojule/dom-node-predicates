# dom-node-predicates

Predicate functions for testing DOM nodes

Works with window.document, JSDOM, anything else that implements the DOM

`npm install @mojule/dom-node-predicates`

```javascript
const predicates = require( '@mojule/dom-node-predicates' )
const something = require( './path/to/something/to/test' )

if( !predicates.node( something ) ){
  console.warn( 'something is not a DOM node!' )
}

```

Includes typescript typing with type guards:

```ts
export declare const element: (value: any) => value is Element;
export declare const processingInstruction: (value: any) => value is ProcessingInstruction;
export declare const text: (value: any) => value is Text;
export declare const comment: (value: any) => value is Comment;
export declare const document: (value: any) => value is Document;
export declare const documentType: (value: any) => value is DocumentType;
export declare const documentFragment: (value: any) => value is DocumentFragment;
export declare const node: (value: any) => value is Node;
```

## License

MIT
