export function generateProjectEpicsTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
