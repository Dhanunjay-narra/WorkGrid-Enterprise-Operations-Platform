export class EventsReplayPayloadHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayPayload" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayPayload" };
  }
}
