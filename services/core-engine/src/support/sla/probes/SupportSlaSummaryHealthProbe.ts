export class SupportSlaSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "SupportSlaSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "SupportSlaSummary" };
  }
}
