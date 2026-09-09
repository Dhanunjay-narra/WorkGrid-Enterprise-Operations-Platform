export function generateProjectKanbanPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
