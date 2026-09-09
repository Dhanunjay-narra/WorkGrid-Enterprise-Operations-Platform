export class DocDocumentFileCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for DocDocumentFile with args:", args);
  }
}
