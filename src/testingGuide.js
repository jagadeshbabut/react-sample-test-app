const testing_rules = `
1. Smoke tests for all the components
2. Shallow rendering only in case of dumb components without states - use Enzyme.shallow
3. Full rendering in case of components with changes to states & lifecycle managements - use Enzyme.mount
4. Use jest-enzyme for more easier matchers 
5. Isolated — all interactions with external services should are mocked
6. Specific — if change small functionality you would like to get specific test failure message
7. They describe what the system does not how so that you can easily refactor
8. always start with simple component rendering test aka smoke testing then test behaviour
9. use explicit setup() and return common shortcut variables with it
10. use helper functions that generates tests
`

console.log(testing_rules)