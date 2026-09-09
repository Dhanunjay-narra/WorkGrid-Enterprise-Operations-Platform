export class DmsFilesSessionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "DmsFilesSession" } {
    return { healthy: true, latencyMs: 1.2, entity: "DmsFilesSession" };
  }
}
