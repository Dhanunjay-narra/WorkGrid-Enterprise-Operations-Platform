import { CrmHealthRecordModel, CrmHealthRecordValidator } from "@nexora/types/domains/crm/health/CrmHealthRecord";

export class CrmHealthRecordService {
  private repository = new Map<string, CrmHealthRecordModel>();

  public create(data: Omit<CrmHealthRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CrmHealthRecordModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmHealthRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmHealthRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmHealthRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmHealthRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmHealthRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmHealthRecordModel>): CrmHealthRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmHealthRecordModel = {
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
