export function generateEventsConsumersSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_consumers",
    entity: "EventsConsumersSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
