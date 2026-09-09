export function generateProjectCapacityBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
