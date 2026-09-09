export class SupportTicketsTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportTicketsTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportTicketsTask" };
  }
}
