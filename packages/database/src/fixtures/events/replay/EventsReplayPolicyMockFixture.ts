export function generateEventsReplayPolicyMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayPolicy",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
