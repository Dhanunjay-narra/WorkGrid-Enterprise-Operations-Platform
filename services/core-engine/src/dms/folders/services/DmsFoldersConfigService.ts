import { DmsFoldersConfigModel, DmsFoldersConfigValidator } from "@nexora/types/domains/dms/folders/DmsFoldersConfig";

export class DmsFoldersConfigService {
  private repository = new Map<string, DmsFoldersConfigModel>();

  public create(data: Omit<DmsFoldersConfigModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersConfigModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersConfigModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersConfigValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersConfig: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersConfigModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersConfigModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersConfigModel>): DmsFoldersConfigModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersConfigModel = {
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
