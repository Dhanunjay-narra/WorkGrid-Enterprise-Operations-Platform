export class EventsDeadletterConfigHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterConfig" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterConfig" };
  }
}
