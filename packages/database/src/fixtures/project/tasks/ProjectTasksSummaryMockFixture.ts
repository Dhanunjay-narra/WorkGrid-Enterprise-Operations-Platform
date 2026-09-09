export function generateProjectTasksSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
