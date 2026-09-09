export function generateSecurityBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
