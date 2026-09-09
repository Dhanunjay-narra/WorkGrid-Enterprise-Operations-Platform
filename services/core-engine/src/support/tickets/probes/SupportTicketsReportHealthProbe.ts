export class SupportTicketsReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportTicketsReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportTicketsReport" };
  }
}
