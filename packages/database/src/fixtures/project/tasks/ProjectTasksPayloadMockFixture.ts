export function generateProjectTasksPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
