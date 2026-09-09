import { SupportSlaRecordModel, SupportSlaRecordValidator } from "@nexora/types/domains/support/sla/SupportSlaRecord";

export class SupportSlaRecordService {
  private repository = new Map<string, SupportSlaRecordModel>();

  public create(data: Omit<SupportSlaRecordModel, "id" | "version" | "createdAt" | "updatedAt">): SupportSlaRecordModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportSlaRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportSlaRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportSlaRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportSlaRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportSlaRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportSlaRecordModel>): SupportSlaRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportSlaRecordModel = {
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
