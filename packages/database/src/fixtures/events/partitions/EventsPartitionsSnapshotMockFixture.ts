export function generateEventsPartitionsSnapshotMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsSnapshot",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
