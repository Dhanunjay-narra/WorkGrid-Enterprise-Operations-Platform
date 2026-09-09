export function generateProjectKanbanScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
