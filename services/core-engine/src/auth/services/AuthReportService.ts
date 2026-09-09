import { AuthReportModel, AuthReportValidator } from "@nexora/types/domains/auth/AuthReport";

export class AuthReportService {
  private repository = new Map<string, AuthReportModel>();

  public create(data: Omit<AuthReportModel, "id" | "version" | "createdAt" | "updatedAt">): AuthReportModel {
    const id = "auth_" + Math.random().toString(36).substring(2, 11);
    const now = new Date().toISOString();
    const item: AuthReportModel = {
      ...data,
      id,
      version: 1,
      createdAt: now,
      updatedAt: now
    };
    const validation = AuthReportValidator.validate(item);
    if (!validation.isValid) {
      throw new Error("Validation failure for AuthReport: " + validation.errors.join(", "));
    }
    this.repository.set(id, item);
    return item;
  }

  public findById(id: string): AuthReportModel | undefined {
    return this.repository.get(id);
  }

  public list(tenantId: string, limit: number = 50, offset: number = 0): { items: AuthReportModel[]; total: number } {
    const all = Array.from(this.repository.values()).filter(i => i.tenantId === tenantId);
    return { items: all.slice(offset, offset + limit), total: all.length };
  }

  public update(id: string, updates: Partial<AuthReportModel>): AuthReportModel | null {
    const existing = this.repository.get(id);
    if (!existing) return null;
    const updated: AuthReportModel = {
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
