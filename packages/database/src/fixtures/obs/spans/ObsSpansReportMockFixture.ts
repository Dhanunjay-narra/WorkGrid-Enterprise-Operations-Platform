export function generateObsSpansReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
