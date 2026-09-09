export class CommChannelsSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "CommChannelsSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "CommChannelsSummary" };
  }
}
