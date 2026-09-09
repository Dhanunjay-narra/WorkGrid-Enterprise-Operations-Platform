export function generateCommDigestThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_digest",
    entity: "CommDigestThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
