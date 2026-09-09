export function generateIntStripeSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
