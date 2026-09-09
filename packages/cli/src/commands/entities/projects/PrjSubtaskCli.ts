export class PrjSubtaskCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for PrjSubtask with args:", args);
  }
}
