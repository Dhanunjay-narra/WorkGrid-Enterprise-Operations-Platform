export function generateEventsDeadletterItemMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterItem",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
