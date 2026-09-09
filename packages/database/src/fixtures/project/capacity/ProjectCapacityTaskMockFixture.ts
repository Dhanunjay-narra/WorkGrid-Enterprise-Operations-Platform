export function generateProjectCapacityTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
