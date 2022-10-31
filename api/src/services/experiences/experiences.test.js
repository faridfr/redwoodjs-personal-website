import {
  experiences,
  experience,
  createExperience,
  updateExperience,
  deleteExperience,
} from './experiences'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('experiences', () => {
  scenario('returns all experiences', async (scenario) => {
    const result = await experiences()

    expect(result.length).toEqual(Object.keys(scenario.experience).length)
  })

  scenario('returns a single experience', async (scenario) => {
    const result = await experience({ id: scenario.experience.one.id })

    expect(result).toEqual(scenario.experience.one)
  })

  scenario('creates a experience', async () => {
    const result = await createExperience({
      input: { active: true },
    })

    expect(result.active).toEqual(true)
  })

  scenario('updates a experience', async (scenario) => {
    const original = await experience({
      id: scenario.experience.one.id,
    })
    const result = await updateExperience({
      id: original.id,
      input: { active: false },
    })

    expect(result.active).toEqual(false)
  })

  scenario('deletes a experience', async (scenario) => {
    const original = await deleteExperience({
      id: scenario.experience.one.id,
    })
    const result = await experience({ id: original.id })

    expect(result).toEqual(null)
  })
})
