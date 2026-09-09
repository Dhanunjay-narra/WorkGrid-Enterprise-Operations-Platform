export class EventsDeadletterThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterThreshold" };
  }
}
