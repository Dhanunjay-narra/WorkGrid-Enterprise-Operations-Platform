export class PrjSprintCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for PrjSprint with args:", args);
  }
}
