export function generateEventsDeadletterEventMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterEvent",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
