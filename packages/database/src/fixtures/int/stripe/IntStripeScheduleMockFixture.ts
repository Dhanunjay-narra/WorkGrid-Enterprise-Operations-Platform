export function generateIntStripeScheduleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeSchedule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
