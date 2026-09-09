export function generateProjectGanttSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_gantt",
    entity: "ProjectGanttSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
