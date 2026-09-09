import { CrmLeadsRecordModel, CrmLeadsRecordValidator } from "@nexora/types/domains/crm/leads/CrmLeadsRecord";

export class CrmLeadsRecordService {
  private repository = new Map<string, CrmLeadsRecordModel>();

  public create(data: Omit<CrmLeadsRecordModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsRecordModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsRecordModel>): CrmLeadsRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsRecordModel = {
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
