export class SupportTicketsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportTicketsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportTicketsSummary" };
  }
}
