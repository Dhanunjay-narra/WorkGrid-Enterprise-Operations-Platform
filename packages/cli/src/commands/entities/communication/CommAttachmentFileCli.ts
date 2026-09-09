export class CommAttachmentFileCli {
  public static async run(action: string, args: string[]): Promise<void> {
    console.log("[CLI-ENTITY] Performing " + action + " for CommAttachmentFile with args:", args);
  }
}
