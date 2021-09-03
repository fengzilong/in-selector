const { inSelector } = require( '../lib' )

test( `class`, () => {
  expect( inSelector( '.a', '.a, .b' ) ).toBe( true )
  expect( inSelector( '.c', '.a, .b' ) ).toBe( false )
} )

test( `id`, () => {
  expect( inSelector( '#a', '.a, #a' ) ).toBe( true )
  expect( inSelector( '#b', '.a, #a' ) ).toBe( false )
} )

test( `tag`, () => {
  expect( inSelector( 'tag', '.a, tag, #a' ) ).toBe( true )
  expect( inSelector( 'tag', '.a > tag' ) ).toBe( true )
  expect( inSelector( 'tag', '.a + tag' ) ).toBe( true )
  expect( inSelector( 'tag', '.a ~ tag' ) ).toBe( true )
  expect( inSelector( 'tag', '.a tag::before' ) ).toBe( true )
  expect( inSelector( 'tag', '.a tag:hover' ) ).toBe( true )
  expect( inSelector( 'foo', '.a tag:hover' ) ).toBe( false )
} )

test( 'universal', () => {
  expect( inSelector( '*', 'html *, body' ) ).toBe( true )
} )
