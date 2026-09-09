export function generateObsSpansTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_spans",
    entity: "ObsSpansTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
