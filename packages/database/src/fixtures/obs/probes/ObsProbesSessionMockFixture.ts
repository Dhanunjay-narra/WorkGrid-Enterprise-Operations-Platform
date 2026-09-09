export function generateObsProbesSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
