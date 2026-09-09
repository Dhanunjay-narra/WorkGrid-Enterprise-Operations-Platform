import { DmsFoldersProfileModel, DmsFoldersProfileValidator } from "@nexora/types/domains/dms/folders/DmsFoldersProfile";

export class DmsFoldersProfileService {
  private repository = new Map<string, DmsFoldersProfileModel>();

  public create(data: Omit<DmsFoldersProfileModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFoldersProfileModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFoldersProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFoldersProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFoldersProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFoldersProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFoldersProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFoldersProfileModel>): DmsFoldersProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFoldersProfileModel = {
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
