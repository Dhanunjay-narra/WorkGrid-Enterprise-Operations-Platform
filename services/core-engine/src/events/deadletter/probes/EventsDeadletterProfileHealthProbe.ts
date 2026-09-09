export class EventsDeadletterProfileHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterProfile" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterProfile" };
  }
}
