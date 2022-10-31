import { db } from 'src/lib/db'

export const experiences = () => {
  return db.experience.findMany()
}

export const experience = ({ id }) => {
  return db.experience.findUnique({
    where: { id },
  })
}

export const createExperience = ({ input }) => {
  return db.experience.create({
    data: input,
  })
}

export const updateExperience = ({ id, input }) => {
  return db.experience.update({
    data: input,
    where: { id },
  })
}

export const deleteExperience = ({ id }) => {
  return db.experience.delete({
    where: { id },
  })
}

export const Experience = {
  ImagesOnExperiences: (_obj, { root }) => {
    return db.experience
      .findUnique({ where: { id: root?.id } })
      .ImagesOnExperiences()
  },
}
