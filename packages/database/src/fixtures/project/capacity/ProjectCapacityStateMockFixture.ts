export function generateProjectCapacityStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
