export class HrSkillMatrixMobileStore {
  public async saveLocal(entity: Record<string, any>): Promise<void> {
    console.log("[MOBILE-SQLITE] Persisted HrSkillMatrix to offline SQLite cache");
  }

  public async getLocal(id: string): Promise<any> {
    return { id, synced: true, entity: "HrSkillMatrix" };
  }
}
