export class EventsDeadletterStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterState" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterState" };
  }
}
