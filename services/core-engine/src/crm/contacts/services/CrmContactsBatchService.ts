import { CrmContactsBatchModel, CrmContactsBatchValidator } from "@nexora/types/domains/crm/contacts/CrmContactsBatch";

export class CrmContactsBatchService {
  private repository = new Map<string, CrmContactsBatchModel>();

  public create(data: Omit<CrmContactsBatchModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsBatchModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsBatchModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsBatchValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsBatch: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsBatchModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsBatchModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsBatchModel>): CrmContactsBatchModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsBatchModel = {
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
