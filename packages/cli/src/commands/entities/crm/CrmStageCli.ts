export class CrmStageCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CrmStage with args:", args);
  }
}
