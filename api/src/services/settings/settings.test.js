import { settings, setting, deleteSetting } from './settings'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('settings', () => {
  scenario('returns all settings', async (scenario) => {
    const result = await settings()

    expect(result.length).toEqual(Object.keys(scenario.setting).length)
  })

  scenario('returns a single setting', async (scenario) => {
    const result = await setting({ id: scenario.setting.one.id })

    expect(result).toEqual(scenario.setting.one)
  })

  scenario('deletes a setting', async (scenario) => {
    const original = await deleteSetting({
      id: scenario.setting.one.id,
    })
    const result = await setting({ id: original.id })

    expect(result).toEqual(null)
  })
})
