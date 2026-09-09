import { CrmActivityData, CrmActivityValidator } from "../../../../packages/types/src/domains/crm/CrmActivity";

export class CrmActivityService {
  private repository = new Map<string, CrmActivityData>();

  public create(data: Omit<CrmActivityData, "id" | "createdAt" | "updatedAt">): CrmActivityData {
    const id = "crm_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: CrmActivityData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = CrmActivityValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for CrmActivity: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): CrmActivityData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): CrmActivityData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<CrmActivityData>): CrmActivityData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: CrmActivityData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
