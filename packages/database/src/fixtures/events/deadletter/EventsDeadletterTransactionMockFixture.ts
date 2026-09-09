export function generateEventsDeadletterTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
