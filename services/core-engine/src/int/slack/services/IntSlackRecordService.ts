import { IntSlackRecordModel, IntSlackRecordValidator } from "@nexora/types/domains/int/slack/IntSlackRecord";

export class IntSlackRecordService {
  private repository = new Map<string, IntSlackRecordModel>();

  public create(data: Omit<IntSlackRecordModel, "id" | "version" | "createdAt" | "updatedAt">): IntSlackRecordModel {
    const id = "int__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IntSlackRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IntSlackRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IntSlackRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IntSlackRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IntSlackRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IntSlackRecordModel>): IntSlackRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IntSlackRecordModel = {
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
