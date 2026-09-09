import { IdPermissionData, IdPermissionValidator } from "../../../../packages/types/src/domains/identity/IdPermission";

export class IdPermissionService {
  private repository = new Map<string, IdPermissionData>();

  public create(data: Omit<IdPermissionData, "id" | "createdAt" | "updatedAt">): IdPermissionData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdPermissionData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdPermissionValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdPermission: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdPermissionData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdPermissionData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdPermissionData>): IdPermissionData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdPermissionData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
