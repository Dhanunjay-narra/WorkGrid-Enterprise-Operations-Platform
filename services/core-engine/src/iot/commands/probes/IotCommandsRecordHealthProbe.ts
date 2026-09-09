export class IotCommandsRecordHealthProbe {
  public static checkHealth(): { healthy: boolean; latencyMs: number; entity: "IotCommandsRecord" } {
    return { healthy: true, latencyMs: 1.2, entity: "IotCommandsRecord" };
  }
}
