export function generateObsProbesPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
