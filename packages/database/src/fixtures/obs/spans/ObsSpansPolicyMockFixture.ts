export function generateObsSpansPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
