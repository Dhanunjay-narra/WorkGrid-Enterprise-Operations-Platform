export function generateEventsPartitionsRecordMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsRecord",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
