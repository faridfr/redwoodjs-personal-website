import { skills, skill, createSkill, updateSkill, deleteSkill } from './skills'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('skills', () => {
  scenario('returns all skills', async (scenario) => {
    const result = await skills()

    expect(result.length).toEqual(Object.keys(scenario.skill).length)
  })

  scenario('returns a single skill', async (scenario) => {
    const result = await skill({ id: scenario.skill.one.id })

    expect(result).toEqual(scenario.skill.one)
  })

  scenario('creates a skill', async () => {
    const result = await createSkill({
      input: { active: true },
    })

    expect(result.active).toEqual(true)
  })

  scenario('updates a skill', async (scenario) => {
    const original = await skill({ id: scenario.skill.one.id })
    const result = await updateSkill({
      id: original.id,
      input: { active: false },
    })

    expect(result.active).toEqual(false)
  })

  scenario('deletes a skill', async (scenario) => {
    const original = await deleteSkill({ id: scenario.skill.one.id })
    const result = await skill({ id: original.id })

    expect(result).toEqual(null)
  })
})
