export function generateObsProbesThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
