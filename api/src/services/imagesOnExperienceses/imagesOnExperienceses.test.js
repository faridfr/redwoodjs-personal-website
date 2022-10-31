import {
  imagesOnExperienceses,
  imagesOnExperiences,
  createImagesOnExperiences,
  updateImagesOnExperiences,
  deleteImagesOnExperiences,
} from './imagesOnExperienceses'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('imagesOnExperienceses', () => {
  scenario('returns all imagesOnExperienceses', async (scenario) => {
    const result = await imagesOnExperienceses()

    expect(result.length).toEqual(
      Object.keys(scenario.imagesOnExperiences).length
    )
  })

  scenario('returns a single imagesOnExperiences', async (scenario) => {
    const result = await imagesOnExperiences({
      id: scenario.imagesOnExperiences.one.id,
    })

    expect(result).toEqual(scenario.imagesOnExperiences.one)
  })

  scenario('creates a imagesOnExperiences', async (scenario) => {
    const result = await createImagesOnExperiences({
      input: {
        imageId: scenario.imagesOnExperiences.two.imageId,
        experienceId: scenario.imagesOnExperiences.two.experienceId,
      },
    })

    expect(result.imageId).toEqual(scenario.imagesOnExperiences.two.imageId)
    expect(result.experienceId).toEqual(
      scenario.imagesOnExperiences.two.experienceId
    )
  })

  scenario('updates a imagesOnExperiences', async (scenario) => {
    const original = await imagesOnExperiences({
      id: scenario.imagesOnExperiences.one.id,
    })
    const result = await updateImagesOnExperiences({
      id: original.id,
      input: { imageId: scenario.imagesOnExperiences.two.imageId },
    })

    expect(result.imageId).toEqual(scenario.imagesOnExperiences.two.imageId)
  })

  scenario('deletes a imagesOnExperiences', async (scenario) => {
    const original = await deleteImagesOnExperiences({
      id: scenario.imagesOnExperiences.one.id,
    })
    const result = await imagesOnExperiences({ id: original.id })

    expect(result).toEqual(null)
  })
})
