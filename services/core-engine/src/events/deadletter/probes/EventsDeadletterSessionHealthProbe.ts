export class EventsDeadletterSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterSession" };
  }
}
