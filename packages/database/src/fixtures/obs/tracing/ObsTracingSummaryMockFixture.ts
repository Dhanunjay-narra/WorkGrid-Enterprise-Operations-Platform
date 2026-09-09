export function generateObsTracingSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
