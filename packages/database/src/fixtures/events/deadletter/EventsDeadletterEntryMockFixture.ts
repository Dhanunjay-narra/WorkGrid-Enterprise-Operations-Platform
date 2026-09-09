export function generateEventsDeadletterEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
