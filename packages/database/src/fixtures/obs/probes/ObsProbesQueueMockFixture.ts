export function generateObsProbesQueueMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesQueue",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
