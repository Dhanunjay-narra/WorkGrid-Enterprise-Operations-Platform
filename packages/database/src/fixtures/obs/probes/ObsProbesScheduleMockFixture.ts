export function generateObsProbesScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
