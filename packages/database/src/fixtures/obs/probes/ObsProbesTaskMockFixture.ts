export function generateObsProbesTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
