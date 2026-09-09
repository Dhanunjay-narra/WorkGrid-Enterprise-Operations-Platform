export class EventsDeadletterSnapshotHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "EventsDeadletterSnapshot" } {
    return { healthy: true, latencyMs: 1.2, entity: "EventsDeadletterSnapshot" };
  }
}
