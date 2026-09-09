import { DmsFilesProfileModel, DmsFilesProfileValidator } from "@nexora/types/domains/dms/files/DmsFilesProfile";

export class DmsFilesProfileService {
  private repository = new Map<string, DmsFilesProfileModel>();

  public create(data: Omit<DmsFilesProfileModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesProfileModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesProfileModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesProfileValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesProfile: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesProfileModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesProfileModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesProfileModel>): DmsFilesProfileModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesProfileModel = {
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
