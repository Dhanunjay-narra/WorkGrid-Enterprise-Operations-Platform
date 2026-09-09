export function generateEventsReplayAuditLogMock(id: string): Record<string, any> {
  return {
    id,
    domain: "events_replay",
    entity: "EventsReplayAuditLog",
    status: "PROVISIONED",
    createdAt: new Date().toISOString()
  };
}
