import { educations, education, deleteEducation } from './educations'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('educations', () => {
  scenario('returns all educations', async (scenario) => {
    const result = await educations()

    expect(result.length).toEqual(Object.keys(scenario.education).length)
  })

  scenario('returns a single education', async (scenario) => {
    const result = await education({ id: scenario.education.one.id })

    expect(result).toEqual(scenario.education.one)
  })

  scenario('deletes a education', async (scenario) => {
    const original = await deleteEducation({
      id: scenario.education.one.id,
    })
    const result = await education({ id: original.id })

    expect(result).toEqual(null)
  })
})
