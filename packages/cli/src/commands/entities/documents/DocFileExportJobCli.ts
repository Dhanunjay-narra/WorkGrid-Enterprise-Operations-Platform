export class DocFileExportJobCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for DocFileExportJob with args:", args);
  }
}
