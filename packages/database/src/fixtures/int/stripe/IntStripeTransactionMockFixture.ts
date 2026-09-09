export function generateIntStripeTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
