export function generateObsSpansTaskMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansTask",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
