export function generateIntStripeAssignmentMock(id: string): Record<string, any> {
  return {
    id,
    domain: "int_stripe",
    entity: "IntStripeAssignment",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
