import { IdTenantData, IdTenantValidator } from "../../../../packages/types/src/domains/identity/IdTenant";

export class IdTenantService {
  private repository = new Map<string, IdTenantData>();

  public create(data: Omit<IdTenantData, "id" | "createdAt" | "updatedAt">): IdTenantData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdTenantData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdTenantValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdTenant: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdTenantData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdTenantData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdTenantData>): IdTenantData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdTenantData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
