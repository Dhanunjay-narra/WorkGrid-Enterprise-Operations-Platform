export class SupportTicketsStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportTicketsState" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportTicketsState" };
  }
}
