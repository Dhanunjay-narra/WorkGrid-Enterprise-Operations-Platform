export function generateEventsReplayBatchMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayBatch",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
