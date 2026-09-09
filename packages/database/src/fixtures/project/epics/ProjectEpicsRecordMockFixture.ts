export function generateProjectEpicsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
