import { IdentityRecordModel, IdentityRecordValidator } from "@nexora/types/domains/identity/IdentityRecord";

export class IdentityRecordService {
  private repository = new Map<string, IdentityRecordModel>();

  public create(data: Omit<IdentityRecordModel, "id" | "version" | "createdAt" | "updatedAt">): IdentityRecordModel {
    const id = "iden_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: IdentityRecordModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdentityRecordValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdentityRecord: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdentityRecordModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: IdentityRecordModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<IdentityRecordModel>): IdentityRecordModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdentityRecordModel = {
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
