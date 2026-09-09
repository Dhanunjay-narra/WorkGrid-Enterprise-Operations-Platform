import { IdSecurityKeyData, IdSecurityKeyValidator } from "../../../../packages/types/src/domains/identity/IdSecurityKey";

export class IdSecurityKeyService {
  private repository = new Map<string, IdSecurityKeyData>();

  public create(data: Omit<IdSecurityKeyData, "id" | "createdAt" | "updatedAt">): IdSecurityKeyData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdSecurityKeyData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdSecurityKeyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdSecurityKey: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdSecurityKeyData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdSecurityKeyData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdSecurityKeyData>): IdSecurityKeyData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdSecurityKeyData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
