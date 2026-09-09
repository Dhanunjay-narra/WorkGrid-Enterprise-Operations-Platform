export function generateObsLoggingTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "obs_logging",
    entity: "ObsLoggingTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
