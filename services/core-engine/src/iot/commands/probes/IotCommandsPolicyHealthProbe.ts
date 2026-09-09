export class IotCommandsPolicyHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsPolicy" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsPolicy" };
  }
}
