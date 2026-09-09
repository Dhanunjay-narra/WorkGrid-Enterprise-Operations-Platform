export function generateEventsDeadletterMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
