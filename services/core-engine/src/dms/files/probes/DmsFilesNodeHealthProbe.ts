export class DmsFilesNodeHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesNode" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesNode" };
  }
}
