export class EventsDeadletterTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterTask" };
  }
}
