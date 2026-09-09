import { IdRoleData, IdRoleValidator } from "../../../../packages/types/src/domains/identity/IdRole";

export class IdRoleService {
  private repository = new Map<string, IdRoleData>();

  public create(data: Omit<IdRoleData, "id" | "createdAt" | "updatedAt">): IdRoleData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdRoleData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdRoleValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdRole: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdRoleData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdRoleData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdRoleData>): IdRoleData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdRoleData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
