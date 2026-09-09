export function generateObsProbesNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
