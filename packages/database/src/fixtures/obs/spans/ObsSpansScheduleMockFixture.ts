export function generateObsSpansScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
