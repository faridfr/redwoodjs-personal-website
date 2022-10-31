export const standard = defineScenario({
  imagesOnExperiences: {
    one: {
      data: {
        image: { create: { active: true } },
        experience: { create: { active: true } },
      },
    },
    two: {
      data: {
        image: { create: { active: true } },
        experience: { create: { active: true } },
      },
    },
  },
})
