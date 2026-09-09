export function generateIntStripeRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
