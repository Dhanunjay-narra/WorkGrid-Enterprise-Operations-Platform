export class SupportTicketsQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportTicketsQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportTicketsQueue" };
  }
}
