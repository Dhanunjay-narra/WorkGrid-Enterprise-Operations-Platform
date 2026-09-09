import { IdApiKeyData, IdApiKeyValidator } from "../../../../packages/types/src/domains/identity/IdApiKey";

export class IdApiKeyService {
  private repository = new Map<string, IdApiKeyData>();

  public create(data: Omit<IdApiKeyData, "id" | "createdAt" | "updatedAt">): IdApiKeyData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdApiKeyData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdApiKeyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdApiKey: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdApiKeyData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdApiKeyData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdApiKeyData>): IdApiKeyData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdApiKeyData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
