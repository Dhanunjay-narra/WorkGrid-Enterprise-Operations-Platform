export class DmsFilesRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesRecord" };
  }
}
