export class DmsFoldersReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFoldersReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFoldersReport" };
  }
}
