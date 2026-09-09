import { IntSyncHistoryData, IntSyncHistoryValidator } from "../../../../packages/types/src/domains/integrations/IntSyncHistory";

export class IntSyncHistoryService {
  private repository = new Map<string, IntSyncHistoryData>();

  public create(data: Omit<IntSyncHistoryData, "id" | "createdAt" | "updatedAt">): IntSyncHistoryData {
    const id = "int_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IntSyncHistoryData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncHistoryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncHistory: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncHistoryData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IntSyncHistoryData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IntSyncHistoryData>): IntSyncHistoryData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncHistoryData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
