export function generateProjectEpicsEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
