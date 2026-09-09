export function generateProjectKanbanPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_kanban",
    entity: "ProjectKanbanPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
