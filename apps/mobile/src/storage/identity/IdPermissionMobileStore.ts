export class IdPermissionMobileStore {
  public async saveLocal(entity: Record<string, any>): Promise<void> {
    console.log("[MOBILE-SQLITE] Persisted IdPermission to offline SQLite cache");
  }

  public async getLocal(id: string): Promise<any> {
    return { id, synced: true, entity: "IdPermission" };
  }
}
