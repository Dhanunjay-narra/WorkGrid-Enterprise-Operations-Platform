export function generateProjectSprintsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_sprints",
    entity: "ProjectSprintsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
