export function generateEventsPartitionsMappingMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsMapping",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
