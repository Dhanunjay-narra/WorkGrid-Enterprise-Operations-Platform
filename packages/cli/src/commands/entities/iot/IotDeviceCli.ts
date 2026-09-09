export class IotDeviceCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IotDevice with args:", args);
  }
}
