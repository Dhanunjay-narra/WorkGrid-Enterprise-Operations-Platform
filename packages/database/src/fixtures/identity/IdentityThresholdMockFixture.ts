export function generateIdentityThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "identity",
    entity: "IdentityThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
