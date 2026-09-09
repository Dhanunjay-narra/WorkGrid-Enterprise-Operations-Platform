import { DmsFoldersNodeModel, DmsFoldersNodeValidator } from "@nexora/types/domains/dms/folders/DmsFoldersNode";

export class DmsFoldersNodeService {
  private repository = new Map<string, DmsFoldersNodeModel>();

  public create(data: Omit<DmsFoldersNodeModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersNodeModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersNodeModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersNodeValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersNode: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersNodeModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersNodeModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersNodeModel>): DmsFoldersNodeModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersNodeModel = {
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
