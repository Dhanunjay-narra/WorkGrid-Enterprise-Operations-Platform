import { CrmLeadsNodeModel, CrmLeadsNodeValidator } from "@nexora/types/domains/crm/leads/CrmLeadsNode";

export class CrmLeadsNodeService {
  private repository = new Map<string, CrmLeadsNodeModel>();

  public create(data: Omit<CrmLeadsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsNodeModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsNodeModel>): CrmLeadsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsNodeModel = {
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
