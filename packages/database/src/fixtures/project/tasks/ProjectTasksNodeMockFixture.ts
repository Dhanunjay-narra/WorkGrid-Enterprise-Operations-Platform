export function generateProjectTasksNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
