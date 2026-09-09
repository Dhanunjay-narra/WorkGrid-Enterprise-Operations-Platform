import { DmsFilesPolicyModel, DmsFilesPolicyValidator } from "@nexora/types/domains/dms/files/DmsFilesPolicy";

export class DmsFilesPolicyService {
  private repository = new Map<string, DmsFilesPolicyModel>();

  public create(data: Omit<DmsFilesPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): DmsFilesPolicyModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsFilesPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsFilesPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsFilesPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsFilesPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsFilesPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsFilesPolicyModel>): DmsFilesPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsFilesPolicyModel = {
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
