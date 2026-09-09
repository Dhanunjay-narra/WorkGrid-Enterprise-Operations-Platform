export function generateEventsPartitionsEntryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsEntry",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
