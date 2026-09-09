export class IntAdapterTelemetryCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IntAdapterTelemetry with args:", args);
  }
}
