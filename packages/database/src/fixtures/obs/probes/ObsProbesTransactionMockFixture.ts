export function generateObsProbesTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_probes",
    entity: "ObsProbesTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
