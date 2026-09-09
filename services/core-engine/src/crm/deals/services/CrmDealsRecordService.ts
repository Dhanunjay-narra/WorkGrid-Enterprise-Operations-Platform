import { CrmDealsRecordModel, CrmDealsRecordValidator } from "@nexora/types/domains/crm/deals/CrmDealsRecord";

export class CrmDealsRecordService {
  private repository = new Map<string, CrmDealsRecordModel>();

  public create(data: Omit<CrmDealsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CrmDealsRecordModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmDealsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmDealsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmDealsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmDealsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmDealsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmDealsRecordModel>): CrmDealsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmDealsRecordModel = {
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
