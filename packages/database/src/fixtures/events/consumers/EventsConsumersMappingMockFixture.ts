export function generateEventsConsumersMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
