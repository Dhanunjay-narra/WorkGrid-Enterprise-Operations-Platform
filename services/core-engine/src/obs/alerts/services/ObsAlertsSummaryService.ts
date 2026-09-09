import { ObsAlertsSummaryModel, ObsAlertsSummaryValidator } from "@nexora/types/domains/obs/alerts/ObsAlertsSummary";

export class ObsAlertsSummaryService {
  private repository = new Map<string, ObsAlertsSummaryModel>();

  public create(data: Omit<ObsAlertsSummaryModel, "id" | "version" | "createdAt" | "updatedAt">): ObsAlertsSummaryModel {
    const id = "obs__" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: ObsAlertsSummaryModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = ObsAlertsSummaryValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for ObsAlertsSummary: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): ObsAlertsSummaryModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: ObsAlertsSummaryModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<ObsAlertsSummaryModel>): ObsAlertsSummaryModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: ObsAlertsSummaryModel = {
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
