export function generateEventsDeadletterConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_deadletter",
    entity: "EventsDeadletterConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
