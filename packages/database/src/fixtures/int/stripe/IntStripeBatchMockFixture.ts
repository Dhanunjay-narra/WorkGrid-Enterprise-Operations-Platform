export function generateIntStripeBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
