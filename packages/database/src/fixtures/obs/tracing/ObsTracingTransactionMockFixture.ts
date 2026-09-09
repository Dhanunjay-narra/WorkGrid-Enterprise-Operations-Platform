export function generateObsTracingTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_tracing",
    entity: "ObsTracingTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
