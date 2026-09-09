export class DmsFilesQueueHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesQueue" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesQueue" };
  }
}
