import { CrmLeadsPayloadModel, CrmLeadsPayloadValidator } from "@nexora/types/domains/crm/leads/CrmLeadsPayload";

export class CrmLeadsPayloadService {
  private repository = new Map<string, CrmLeadsPayloadModel>();

  public create(data: Omit<CrmLeadsPayloadModel, "id" | "version" | "createdAt" | "updatedAt">): CrmLeadsPayloadModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmLeadsPayloadModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadsPayloadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLeadsPayload: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadsPayloadModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmLeadsPayloadModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmLeadsPayloadModel>): CrmLeadsPayloadModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadsPayloadModel = {
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
