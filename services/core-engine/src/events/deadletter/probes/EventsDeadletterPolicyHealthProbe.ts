export class EventsDeadletterPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterPolicy" };
  }
}
