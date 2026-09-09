export function generateEventsPartitionsBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
