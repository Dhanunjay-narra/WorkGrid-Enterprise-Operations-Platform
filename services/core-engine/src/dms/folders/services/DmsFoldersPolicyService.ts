import { DmsFoldersPolicyModel, DmsFoldersPolicyValidator } from "@nexora/types/domains/dms/folders/DmsFoldersPolicy";

export class DmsFoldersPolicyService {
  private repository = new Map<string, DmsFoldersPolicyModel>();

  public create(data: Omit<DmsFoldersPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersPolicyModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersPolicyModel>): DmsFoldersPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersPolicyModel = {
      ...existing,
      ...updates,
      version: existing.version + 1,
      updatedAt: new Date().toISOString()
    };
    this.repository.set(id, updated);
    return updated;
  }

  public remove(id: string): boolean {
    return this.repository.delete(id);
  }
}
