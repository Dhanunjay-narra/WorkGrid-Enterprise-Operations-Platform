export class DmsFilesPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesPolicy" };
  }
}
