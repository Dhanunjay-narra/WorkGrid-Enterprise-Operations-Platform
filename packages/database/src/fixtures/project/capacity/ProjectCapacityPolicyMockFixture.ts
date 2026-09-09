export function generateProjectCapacityPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacityPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
