export function generateEventsConsumersConfigMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersConfig",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
