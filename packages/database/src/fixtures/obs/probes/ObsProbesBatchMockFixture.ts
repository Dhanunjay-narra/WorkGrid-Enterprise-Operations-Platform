export function generateObsProbesBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
