export class BiExportJobCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for BiExportJob with args:", args);
  }
}
