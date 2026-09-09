export function generateObsProbesProfileMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesProfile",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
