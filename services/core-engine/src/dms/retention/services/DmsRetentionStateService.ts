import { DmsRetentionStateModel, DmsRetentionStateValidator } from "@nexora/types/domains/dms/retention/DmsRetentionState";

export class DmsRetentionStateService {
  private repository = new Map<string, DmsRetentionStateModel>();

  public create(data: Omit<DmsRetentionStateModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionStateModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionStateModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionStateValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionState: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionStateModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionStateModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionStateModel>): DmsRetentionStateModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionStateModel = {
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
