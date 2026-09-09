export function generateProjectEpicsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_epics",
    entity: "ProjectEpicsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
