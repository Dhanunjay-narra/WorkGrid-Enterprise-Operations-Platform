export function generateIntSlackThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_slack",
    entity: "IntSlackThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
