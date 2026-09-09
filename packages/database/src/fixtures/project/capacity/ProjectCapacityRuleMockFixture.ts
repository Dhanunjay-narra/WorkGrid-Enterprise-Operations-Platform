export function generateProjectCapacityRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
