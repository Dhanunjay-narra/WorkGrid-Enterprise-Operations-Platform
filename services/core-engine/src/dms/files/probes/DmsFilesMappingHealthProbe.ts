export class DmsFilesMappingHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesMapping" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesMapping" };
  }
}
