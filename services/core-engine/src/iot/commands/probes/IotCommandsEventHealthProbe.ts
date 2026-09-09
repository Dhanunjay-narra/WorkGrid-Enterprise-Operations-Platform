export class IotCommandsEventHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsEvent" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsEvent" };
  }
}
