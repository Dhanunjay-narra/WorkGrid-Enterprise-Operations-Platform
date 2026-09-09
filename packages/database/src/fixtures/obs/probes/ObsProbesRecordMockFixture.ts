export function generateObsProbesRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
