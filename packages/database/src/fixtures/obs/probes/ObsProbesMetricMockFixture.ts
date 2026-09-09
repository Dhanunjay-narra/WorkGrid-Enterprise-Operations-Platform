export function generateObsProbesMetricMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesMetric",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
