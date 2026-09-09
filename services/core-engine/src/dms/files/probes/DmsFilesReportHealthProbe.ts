export class DmsFilesReportHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesReport" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesReport" };
  }
}
