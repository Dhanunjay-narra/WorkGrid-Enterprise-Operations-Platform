export class IotHeartbeatRecordCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for IotHeartbeatRecord with args:", args);
  }
}
