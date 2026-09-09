export function generateProjectTasksReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
