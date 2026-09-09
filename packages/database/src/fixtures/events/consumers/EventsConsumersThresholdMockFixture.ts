export function generateEventsConsumersThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
