const testing_rules = `
1. Smoke tests for all the components
2. Shallow rendering only in case of dumb components without states - use Enzyme.shallow
3. Full rendering in case of components with changes to states & lifecycle managements - use Enzyme.mount
4. Use jest-enzyme for more easier matchers 
`

console.log(testing_rules)