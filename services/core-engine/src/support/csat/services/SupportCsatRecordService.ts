import { SupportCsatRecordModel, SupportCsatRecordValidator } from "@nexora/types/domains/support/csat/SupportCsatRecord";

export class SupportCsatRecordService {
  private repository = new Map<string, SupportCsatRecordModel>();

  public create(data: Omit<SupportCsatRecordModel, "id" | "version" | "createdAt" | "updatedAt">): SupportCsatRecordModel {
    const id = "supp_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: SupportCsatRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = SupportCsatRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SupportCsatRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SupportCsatRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: SupportCsatRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<SupportCsatRecordModel>): SupportCsatRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SupportCsatRecordModel = {
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
