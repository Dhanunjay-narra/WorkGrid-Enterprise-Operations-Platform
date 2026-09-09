export function generateProjectSprintsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
