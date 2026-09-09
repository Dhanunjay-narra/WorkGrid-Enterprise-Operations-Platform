import { DmsRetentionEventModel, DmsRetentionEventValidator } from "@nexora/types/domains/dms/retention/DmsRetentionEvent";

export class DmsRetentionEventService {
  private repository = new Map<string, DmsRetentionEventModel>();

  public create(data: Omit<DmsRetentionEventModel, "id" | "version" | "createdAt" | "updatedAt">): DmsRetentionEventModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsRetentionEventModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsRetentionEventValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsRetentionEvent: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsRetentionEventModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsRetentionEventModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsRetentionEventModel>): DmsRetentionEventModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsRetentionEventModel = {
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
