export class EventsReplayPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsReplayPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsReplayPolicy" };
  }
}
