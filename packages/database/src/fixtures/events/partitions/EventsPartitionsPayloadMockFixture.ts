export function generateEventsPartitionsPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
