const parser = require( 'postcss-selector-parser' )

const TYPES = {
  CLASS: 'class',
  ID: 'id',
  TAG: 'tag',
  UNIVERSAL: 'universal'
}

exports.inSelector = function ( input = '', selectorString = '' ) {
  const result = reset( {} )

  const processor = parser( selectors => {
    selectors.walk( selector => {
      const { type, value } = selector

      if (
        type === TYPES.CLASS ||
        type === TYPES.ID ||
        type === TYPES.TAG ||
        type === TYPES.UNIVERSAL
      ) {
        result[ type ].push( value )
      }
    } )
  } )

  processor.processSync( selectorString )

  if ( input.startsWith( '.' ) ) {
    // eslint-disable-next-line no-magic-numbers
    return result[ TYPES.CLASS ].includes( input.substring( 1 ) )
  }

  if ( input.startsWith( '#' ) ) {
    // eslint-disable-next-line no-magic-numbers
    return result[ TYPES.ID ].includes( input.substring( 1 ) )
  }

  if ( input === '*' ) {
    // eslint-disable-next-line no-magic-numbers
    return result[ TYPES.UNIVERSAL ].length > 0
  }

  return result[ TYPES.TAG ].includes( input )
}

function reset( target ) {
  target[ TYPES.CLASS ] = []
  target[ TYPES.ID ] = []
  target[ TYPES.TAG ] = []
  target[ TYPES.UNIVERSAL ] = []

  return target
}
