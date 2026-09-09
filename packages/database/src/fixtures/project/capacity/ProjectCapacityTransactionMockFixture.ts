export function generateProjectCapacityTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
