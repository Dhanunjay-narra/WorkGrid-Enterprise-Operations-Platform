export function generateObsSpansSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
