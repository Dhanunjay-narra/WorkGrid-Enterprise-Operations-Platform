export function generateCommCallsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_calls",
    entity: "CommCallsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
