export function generateProjectGanttReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
