export function generateEventsPartitionsReportMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_partitions",
    entity: "EventsPartitionsReport",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
