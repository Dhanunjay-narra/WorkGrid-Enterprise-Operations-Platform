export function generateEventsDeadletterPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
