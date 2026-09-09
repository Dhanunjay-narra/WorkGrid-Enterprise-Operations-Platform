export function generateObsProbesEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
