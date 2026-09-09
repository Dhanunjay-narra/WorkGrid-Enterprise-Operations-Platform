export class EventsDeadletterEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterEvent" };
  }
}
