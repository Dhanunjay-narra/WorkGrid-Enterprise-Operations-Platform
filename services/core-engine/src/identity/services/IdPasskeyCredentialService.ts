import { IdPasskeyCredentialData, IdPasskeyCredentialValidator } from "../../../../packages/types/src/domains/identity/IdPasskeyCredential";

export class IdPasskeyCredentialService {
  private repository = new Map<string, IdPasskeyCredentialData>();

  public create(data: Omit<IdPasskeyCredentialData, "id" | "createdAt" | "updatedAt">): IdPasskeyCredentialData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdPasskeyCredentialData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdPasskeyCredentialValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdPasskeyCredential: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdPasskeyCredentialData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdPasskeyCredentialData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdPasskeyCredentialData>): IdPasskeyCredentialData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdPasskeyCredentialData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
