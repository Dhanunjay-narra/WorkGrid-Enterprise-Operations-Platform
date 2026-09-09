export function generateObsProbesMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
