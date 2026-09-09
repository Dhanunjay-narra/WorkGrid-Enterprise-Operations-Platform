export function generateSecurityThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "security",
    entity: "SecurityThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
