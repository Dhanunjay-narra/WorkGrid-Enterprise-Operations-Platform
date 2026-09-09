export function generateObsProfilingSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_profiling",
    entity: "ObsProfilingSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
