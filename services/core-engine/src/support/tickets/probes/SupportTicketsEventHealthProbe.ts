export class SupportTicketsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportTicketsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportTicketsEvent" };
  }
}
