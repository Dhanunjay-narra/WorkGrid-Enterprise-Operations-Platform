import { CrmLeadData, CrmLeadValidator } from "../../../../packages/types/src/domains/crm/CrmLead";

export class CrmLeadService {
  private repository = new Map<string, CrmLeadData>();

  public create(data: Omit<CrmLeadData, "id" | "createdAt" | "updatedAt">): CrmLeadData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmLeadData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmLeadValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmLead: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmLeadData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmLeadData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmLeadData>): CrmLeadData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmLeadData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
