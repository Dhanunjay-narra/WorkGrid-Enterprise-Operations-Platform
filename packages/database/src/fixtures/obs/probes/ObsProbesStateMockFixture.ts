export function generateObsProbesStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
