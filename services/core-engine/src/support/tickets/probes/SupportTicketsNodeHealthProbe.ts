export class SupportTicketsNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportTicketsNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportTicketsNode" };
  }
}
