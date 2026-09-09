export function generateEventsPartitionsSummaryMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsSummary",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
