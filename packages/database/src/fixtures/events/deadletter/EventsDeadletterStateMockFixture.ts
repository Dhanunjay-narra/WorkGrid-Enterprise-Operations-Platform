export function generateEventsDeadletterStateMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterState",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
