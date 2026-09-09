export function generateProjectCapacitySessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "project_capacity",
    entity: "ProjectCapacitySession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
