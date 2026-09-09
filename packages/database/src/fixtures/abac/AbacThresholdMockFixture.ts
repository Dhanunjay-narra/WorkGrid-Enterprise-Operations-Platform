export function generateAbacThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "abac",
    entity: "AbacThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
