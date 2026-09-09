import { IdSsoConfigData, IdSsoConfigValidator } from "../../../../packages/types/src/domains/identity/IdSsoConfig";

export class IdSsoConfigService {
  private repository = new Map<string, IdSsoConfigData>();

  public create(data: Omit<IdSsoConfigData, "id" | "createdAt" | "updatedAt">): IdSsoConfigData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdSsoConfigData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdSsoConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdSsoConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdSsoConfigData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdSsoConfigData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdSsoConfigData>): IdSsoConfigData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdSsoConfigData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
