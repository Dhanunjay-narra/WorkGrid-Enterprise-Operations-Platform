export function generateEventsDeadletterNodeMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterNode",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
