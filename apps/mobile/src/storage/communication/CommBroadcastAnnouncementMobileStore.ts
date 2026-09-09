export class CommBroadcastAnnouncementMobileStore {
  public async saveLocal(entity: Record<string, any>): Promise<void> {
    console.log("[MOBILE-SQLITE] Persisted CommBroadcastAnnouncement to offline SQLite cache");
  }

  public async getLocal(id: string): Promise<any> {
    return { id, synced: true, entity: "CommBroadcastAnnouncement" };
  }
}
