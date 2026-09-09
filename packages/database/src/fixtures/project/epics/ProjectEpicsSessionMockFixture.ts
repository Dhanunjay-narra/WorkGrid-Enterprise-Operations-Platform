export function generateProjectEpicsSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
