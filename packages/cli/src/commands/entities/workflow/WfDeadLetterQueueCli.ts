export class WfDeadLetterQueueCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for WfDeadLetterQueue with args:", args);
  }
}
