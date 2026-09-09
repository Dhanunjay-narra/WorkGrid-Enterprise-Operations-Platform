export function generateEventsConsumersRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
