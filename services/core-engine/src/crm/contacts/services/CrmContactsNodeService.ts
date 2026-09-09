import { CrmContactsNodeModel, CrmContactsNodeValidator } from "@nexora/types/domains/crm/contacts/CrmContactsNode";

export class CrmContactsNodeService {
  private repository = new Map<string, CrmContactsNodeModel>();

  public create(data: Omit<CrmContactsNodeModel, "id" | "version" | "createdAt" | "updatedAt">): CrmContactsNodeModel {
    const id = "crm__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: CrmContactsNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactsNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContactsNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactsNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: CrmContactsNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<CrmContactsNodeModel>): CrmContactsNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactsNodeModel = {
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
