import { db } from 'src/lib/db'

export const educations = () => {
  return db.education.findMany()
}

export const education = ({ id }) => {
  return db.education.findUnique({
    where: { id },
  })
}

export const createEducation = ({ input }) => {
  return db.education.create({
    data: input,
  })
}

export const updateEducation = ({ id, input }) => {
  return db.education.update({
    data: input,
    where: { id },
  })
}

export const deleteEducation = ({ id }) => {
  return db.education.delete({
    where: { id },
  })
}

export const Education = {
  image: (_obj, { root }) => {
    return db.education.findUnique({ where: { id: root?.id } }).image()
  },
}
