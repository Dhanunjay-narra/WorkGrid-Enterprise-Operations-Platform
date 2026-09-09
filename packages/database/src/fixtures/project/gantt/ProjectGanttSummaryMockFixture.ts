export function generateProjectGanttSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
