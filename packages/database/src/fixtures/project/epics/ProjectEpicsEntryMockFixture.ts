export function generateProjectEpicsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
