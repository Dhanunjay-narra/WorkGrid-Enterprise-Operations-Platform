export function generateObsProbesSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
