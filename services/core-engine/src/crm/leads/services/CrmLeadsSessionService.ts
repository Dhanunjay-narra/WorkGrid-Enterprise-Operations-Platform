import { CrmLeadsSessionModel, CrmLeadsSessionValidator } from "@nexora/types/domains/crm/leads/CrmLeadsSession";

export class CrmLeadsSessionService {
  private repository = new Map<string, CrmLeadsSessionModel>();

  public create(data: Omit<CrmLeadsSessionModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsSessionModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsSessionModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsSessionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsSession: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsSessionModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsSessionModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsSessionModel>): CrmLeadsSessionModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsSessionModel = {
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
