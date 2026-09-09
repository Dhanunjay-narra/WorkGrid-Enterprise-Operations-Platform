export function generateObsTracingTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
