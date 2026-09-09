import { IdAccessReviewData, IdAccessReviewValidator } from "../../../../packages/types/src/domains/identity/IdAccessReview";

export class IdAccessReviewService {
  private repository = new Map<string, IdAccessReviewData>();

  public create(data: Omit<IdAccessReviewData, "id" | "createdAt" | "updatedAt">): IdAccessReviewData {
    const id = "ide_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: IdAccessReviewData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = IdAccessReviewValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for IdAccessReview: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): IdAccessReviewData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): IdAccessReviewData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<IdAccessReviewData>): IdAccessReviewData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: IdAccessReviewData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
