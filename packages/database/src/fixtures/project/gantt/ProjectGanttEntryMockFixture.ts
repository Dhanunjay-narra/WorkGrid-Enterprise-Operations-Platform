export function generateProjectGanttEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
