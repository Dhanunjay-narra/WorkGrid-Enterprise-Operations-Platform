export function generateProjectEpicsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
