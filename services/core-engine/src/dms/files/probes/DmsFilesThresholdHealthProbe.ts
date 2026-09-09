export class DmsFilesThresholdHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesThreshold" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesThreshold" };
  }
}
