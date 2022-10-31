import { db } from 'src/lib/db'

export const images = () => {
  return db.image.findMany()
}

export const image = ({ id }) => {
  return db.image.findUnique({
    where: { id },
  })
}

export const createImage = ({ input }) => {
  return db.image.create({
    data: input,
  })
}

export const updateImage = ({ id, input }) => {
  return db.image.update({
    data: input,
    where: { id },
  })
}

export const deleteImage = ({ id }) => {
  return db.image.delete({
    where: { id },
  })
}

export const Image = {
  User: (_obj, { root }) => {
    return db.image.findUnique({ where: { id: root?.id } }).User()
  },
  Education: (_obj, { root }) => {
    return db.image.findUnique({ where: { id: root?.id } }).Education()
  },
  Skill: (_obj, { root }) => {
    return db.image.findUnique({ where: { id: root?.id } }).Skill()
  },
  ImagesOnExperiences: (_obj, { root }) => {
    return db.image
      .findUnique({ where: { id: root?.id } })
      .ImagesOnExperiences()
  },
}
