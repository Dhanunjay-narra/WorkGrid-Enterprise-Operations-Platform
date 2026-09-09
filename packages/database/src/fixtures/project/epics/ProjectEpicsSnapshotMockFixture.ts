export function generateProjectEpicsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
