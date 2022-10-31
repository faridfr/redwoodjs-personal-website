import { db } from 'src/lib/db'

export const imagesOnExperienceses = () => {
  return db.imagesOnExperiences.findMany()
}

export const imagesOnExperiences = ({ id }) => {
  return db.imagesOnExperiences.findUnique({
    where: { id },
  })
}

export const createImagesOnExperiences = ({ input }) => {
  return db.imagesOnExperiences.create({
    data: input,
  })
}

export const updateImagesOnExperiences = ({ id, input }) => {
  return db.imagesOnExperiences.update({
    data: input,
    where: { id },
  })
}

export const deleteImagesOnExperiences = ({ id }) => {
  return db.imagesOnExperiences.delete({
    where: { id },
  })
}

export const ImagesOnExperiences = {
  image: (_obj, { root }) => {
    return db.imagesOnExperiences
      .findUnique({ where: { id: root?.id } })
      .image()
  },
  experience: (_obj, { root }) => {
    return db.imagesOnExperiences
      .findUnique({ where: { id: root?.id } })
      .experience()
  },
}
