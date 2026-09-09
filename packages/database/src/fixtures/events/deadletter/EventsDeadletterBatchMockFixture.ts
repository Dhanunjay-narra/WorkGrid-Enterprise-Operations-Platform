export function generateEventsDeadletterBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
