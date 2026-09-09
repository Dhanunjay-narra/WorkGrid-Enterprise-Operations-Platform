import { CrmContactData, CrmContactValidator } from "../../../../packages/types/src/domains/crm/CrmContact";

export class CrmContactService {
  private repository = new Map<string, CrmContactData>();

  public create(data: Omit<CrmContactData, "id" | "createdAt" | "updatedAt">): CrmContactData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmContactData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmContactValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmContact: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmContactData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmContactData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmContactData>): CrmContactData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmContactData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
