import { DmsOcrPolicyModel, DmsOcrPolicyValidator } from "@nexora/types/domains/dms/ocr/DmsOcrPolicy";

export class DmsOcrPolicyService {
  private repository = new Map<string, DmsOcrPolicyModel>();

  public create(data: Omit<DmsOcrPolicyModel, "id" | "version" | "createdAt" | "updatedAt">): DmsOcrPolicyModel {
    const id = "dms__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: DmsOcrPolicyModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = DmsOcrPolicyValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for DmsOcrPolicy: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): DmsOcrPolicyModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: DmsOcrPolicyModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<DmsOcrPolicyModel>): DmsOcrPolicyModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: DmsOcrPolicyModel = {
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
