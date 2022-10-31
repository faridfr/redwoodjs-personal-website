import { db } from 'src/lib/db'

export const skills = () => {
  return db.skill.findMany()
}

export const skill = ({ id }) => {
  return db.skill.findUnique({
    where: { id },
  })
}

export const createSkill = ({ input }) => {
  return db.skill.create({
    data: input,
  })
}

export const updateSkill = ({ id, input }) => {
  return db.skill.update({
    data: input,
    where: { id },
  })
}

export const deleteSkill = ({ id }) => {
  return db.skill.delete({
    where: { id },
  })
}

export const Skill = {
  image: (_obj, { root }) => {
    return db.skill.findUnique({ where: { id: root?.id } }).image()
  },
}
