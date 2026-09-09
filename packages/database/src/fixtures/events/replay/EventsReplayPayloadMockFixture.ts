export function generateEventsReplayPayloadMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayPayload",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
