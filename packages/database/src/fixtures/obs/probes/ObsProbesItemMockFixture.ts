export function generateObsProbesItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
