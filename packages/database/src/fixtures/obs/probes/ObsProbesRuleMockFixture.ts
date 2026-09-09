export function generateObsProbesRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
