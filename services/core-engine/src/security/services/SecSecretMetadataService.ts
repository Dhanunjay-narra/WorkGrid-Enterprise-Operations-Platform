import { SecSecretMetadataData, SecSecretMetadataValidator } from "../../../../packages/types/src/domains/security/SecSecretMetadata";

export class SecSecretMetadataService {
  private repository = new Map<string, SecSecretMetadataData>();

  public create(data: Omit<SecSecretMetadataData, "id" | "createdAt" | "updatedAt">): SecSecretMetadataData {
    const id = "sec_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: SecSecretMetadataData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = SecSecretMetadataValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for SecSecretMetadata: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): SecSecretMetadataData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): SecSecretMetadataData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<SecSecretMetadataData>): SecSecretMetadataData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: SecSecretMetadataData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
