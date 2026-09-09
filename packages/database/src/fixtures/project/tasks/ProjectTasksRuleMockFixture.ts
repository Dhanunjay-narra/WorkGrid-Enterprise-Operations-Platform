export function generateProjectTasksRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
