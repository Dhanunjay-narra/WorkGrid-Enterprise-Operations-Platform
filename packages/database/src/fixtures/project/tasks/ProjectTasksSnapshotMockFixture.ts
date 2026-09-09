export function generateProjectTasksSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_tasks",
    entity: "ProjectTasksSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
