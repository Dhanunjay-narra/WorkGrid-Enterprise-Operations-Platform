
export class DatabaseManager {
  private static instance: DatabaseManager;
  public static getInstance() {
    if (!DatabaseManager.instance) DatabaseManager.instance = new DatabaseManager();
    return DatabaseManager.instance;
  }
  public async query(sql: string) { return []; }
}
export const db = DatabaseManager.getInstance();
