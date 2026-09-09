import { IdPolicyData, IdPolicyValidator } from "../../../../packages/types/src/domains/identity/IdPolicy";

export class IdPolicyService {
  private repository = new Map<string, IdPolicyData>();

  public create(data: Omit<IdPolicyData, "id" | "createdAt" | "updatedAt">): IdPolicyData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdPolicyData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdPolicyData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdPolicyData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdPolicyData>): IdPolicyData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdPolicyData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
