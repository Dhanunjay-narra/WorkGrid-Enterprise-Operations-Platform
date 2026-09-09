export function generateObsProbesEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
