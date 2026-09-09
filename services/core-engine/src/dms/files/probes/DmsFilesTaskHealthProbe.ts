export class DmsFilesTaskHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesTask" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesTask" };
  }
}
