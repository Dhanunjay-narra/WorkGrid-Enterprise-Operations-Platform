export function generateProjectEpicsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
