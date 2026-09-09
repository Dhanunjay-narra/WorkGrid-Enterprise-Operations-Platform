export function generateIntSyncThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_sync",
    entity: "IntSyncThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
