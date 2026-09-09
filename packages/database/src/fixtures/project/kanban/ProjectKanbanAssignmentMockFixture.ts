export function generateProjectKanbanAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
