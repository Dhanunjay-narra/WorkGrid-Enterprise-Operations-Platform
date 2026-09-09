export function generateEventsDeadletterSessionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterSession",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
