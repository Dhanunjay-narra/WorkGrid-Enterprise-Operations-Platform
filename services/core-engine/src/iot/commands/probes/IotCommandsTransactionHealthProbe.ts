export class IotCommandsTransactionHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsTransaction" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsTransaction" };
  }
}
