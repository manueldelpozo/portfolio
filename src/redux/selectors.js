export const getWorksState = store => store.works

export const getWorkList = store =>
  getWorksState(store) ? getWorksState(store).allIds : []

export const getWorkById = (store, id) =>
  getWorksState(store) ? { ...getWorksState(store).byIds[id], id } : {}

export const getWorks = store =>
  getWorkList(store).map(id => getWorkById(store, id))