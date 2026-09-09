import { IdMfaConfigData, IdMfaConfigValidator } from "../../../../packages/types/src/domains/identity/IdMfaConfig";

export class IdMfaConfigService {
  private repository = new Map<string, IdMfaConfigData>();

  public create(data: Omit<IdMfaConfigData, "id" | "createdAt" | "updatedAt">): IdMfaConfigData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdMfaConfigData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdMfaConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdMfaConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdMfaConfigData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdMfaConfigData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdMfaConfigData>): IdMfaConfigData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdMfaConfigData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
