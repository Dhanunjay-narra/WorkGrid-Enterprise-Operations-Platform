export function generateEventsPartitionsThresholdMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsThreshold",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
