export function generateProjectEpicsQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
