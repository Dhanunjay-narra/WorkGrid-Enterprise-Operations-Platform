import { IntSyncThresholdModel, IntSyncThresholdValidator } from "@nexora/types/domains/int/sync/IntSyncThreshold";

export class IntSyncThresholdService {
  private repository = new Map<string, IntSyncThresholdModel>();

  public create(data: Omit<IntSyncThresholdModel, "id" | "version" | "createdAt" | "updatedAt">): IntSyncThresholdModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSyncThresholdModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSyncThresholdValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSyncThreshold: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSyncThresholdModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSyncThresholdModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSyncThresholdModel>): IntSyncThresholdModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSyncThresholdModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
