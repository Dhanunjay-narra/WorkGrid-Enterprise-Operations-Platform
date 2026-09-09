export function generateObsTracingQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
