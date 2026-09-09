import { TenancyRecordModel, TenancyRecordValidator } from "@nexora/types/domains/tenancy/TenancyRecord";

export class TenancyRecordService {
  private repository = new Map<string, TenancyRecordModel>();

  public create(data: Omit<TenancyRecordModel, "id" | "version" | "createdAt" | "updatedAt">): TenancyRecordModel {
    const id = "tena_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: TenancyRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = TenancyRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for TenancyRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): TenancyRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: TenancyRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<TenancyRecordModel>): TenancyRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: TenancyRecordModel = {
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
