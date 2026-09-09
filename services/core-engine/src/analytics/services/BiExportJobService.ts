import { BiExportJobData, BiExportJobValidator } from "../../../../packages/types/src/domains/analytics/BiExportJob";

export class BiExportJobService {
  private repository = new Map<string, BiExportJobData>();

  public create(data: Omit<BiExportJobData, "id" | "createdAt" | "updatedAt">): BiExportJobData {
    const id = "ana_" + Math.random().toString(36).substring(2, 9);
    const now = new Date().toISOString();
    const item: BiExportJobData = {
      ...data,
      id,
      createdAt: now,
      updatedAt: now
    };
    const validation = BiExportJobValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for BiExportJob: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): BiExportJobData | undefined {
    return this.repository.get(id);
  }

  public listByTenant(tenantId: string): BiExportJobData[] {
    return Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
  }

  public update(id: string, updates: Partial<BiExportJobData>): BiExportJobData | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: BiExportJobData = { ...existing, ...updates, updatedAt: new Date().toISOString() };
    this.repository.set(id, updated);
    return updated;
  }

  public delete(id: string): boolean {
    return this.repository.delete(id);
  }
}
