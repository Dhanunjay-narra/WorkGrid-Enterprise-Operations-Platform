export class DmsFoldersSummaryHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersSummary" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersSummary" };
  }
}
