export class AiToolCallRecordCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for AiToolCallRecord with args:", args);
  }
}
