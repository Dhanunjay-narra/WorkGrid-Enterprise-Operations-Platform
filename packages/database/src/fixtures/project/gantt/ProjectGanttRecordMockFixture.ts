export function generateProjectGanttRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
