export function generateObsSpansAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
