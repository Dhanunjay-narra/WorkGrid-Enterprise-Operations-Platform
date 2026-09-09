export function generateEventsDeadletterRuleMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterRule",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
