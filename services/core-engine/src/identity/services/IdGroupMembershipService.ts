import { IdGroupMembershipData, IdGroupMembershipValidator } from "../../../../packages/types/src/domains/identity/IdGroupMembership";

export class IdGroupMembershipService {
  private repository = new Map<string, IdGroupMembershipData>();

  public create(data: Omit<IdGroupMembershipData, "id" | "createdAt" | "updatedAt">): IdGroupMembershipData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdGroupMembershipData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdGroupMembershipValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdGroupMembership: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdGroupMembershipData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdGroupMembershipData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdGroupMembershipData>): IdGroupMembershipData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdGroupMembershipData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
