import { BiAnomaliesAssignmentModel, BiAnomaliesAssignmentValidator } from "@nexora/types/domains/bi/anomalies/BiAnomaliesAssignment";

export class BiAnomaliesAssignmentService {
  private repository = new Map<string, BiAnomaliesAssignmentModel>();

  public create(data: Omit<BiAnomaliesAssignmentModel, "id" | "version" | "createdAt" | "updatedAt">): BiAnomaliesAssignmentModel {
    const id = "bi_a_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: BiAnomaliesAssignmentModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiAnomaliesAssignmentValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiAnomaliesAssignment: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiAnomaliesAssignmentModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: BiAnomaliesAssignmentModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<BiAnomaliesAssignmentModel>): BiAnomaliesAssignmentModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiAnomaliesAssignmentModel = {
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
