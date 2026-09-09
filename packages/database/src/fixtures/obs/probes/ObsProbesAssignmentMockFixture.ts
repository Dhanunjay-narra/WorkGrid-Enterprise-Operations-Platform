export function generateObsProbesAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
