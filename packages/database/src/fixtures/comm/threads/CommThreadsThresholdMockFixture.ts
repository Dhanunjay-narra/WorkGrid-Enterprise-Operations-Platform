export function generateCommThreadsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "comm_threads",
    entity: "CommThreadsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
