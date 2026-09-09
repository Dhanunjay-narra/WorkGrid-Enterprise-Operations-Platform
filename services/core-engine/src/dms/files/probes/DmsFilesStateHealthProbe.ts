export class DmsFilesStateHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesState" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesState" };
  }
}
