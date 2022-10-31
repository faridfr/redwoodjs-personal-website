import { db } from 'src/lib/db'

export const settings = () => {
  return db.setting.findMany()
}

export const setting = ({ id }) => {
  return db.setting.findUnique({
    where: { id },
  })
}

export const createSetting = ({ input }) => {
  return db.setting.create({
    data: input,
  })
}

export const updateSetting = ({ id, input }) => {
  return db.setting.update({
    data: input,
    where: { id },
  })
}

export const deleteSetting = ({ id }) => {
  return db.setting.delete({
    where: { id },
  })
}
