export function generateEventsReplayTransactionMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayTransaction",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
