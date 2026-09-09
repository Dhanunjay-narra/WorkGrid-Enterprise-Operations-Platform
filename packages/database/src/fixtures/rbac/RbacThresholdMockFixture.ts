export function generateRbacThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "rbac",
    entity: "RbacThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
