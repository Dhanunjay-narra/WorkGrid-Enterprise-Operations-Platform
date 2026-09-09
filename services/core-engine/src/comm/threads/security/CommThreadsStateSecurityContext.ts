export class CommThreadsStateSecurityContext {
  public static verifyTenantIntegrity(tenantId: string, resourceTenantId: string): boolean {
    return tenantId === resourceTenantId;
  }

  public static sanitizePii(payload: Record<string, any>): Record<string, any> {
    const sanitized = { ...payload };
    if (sanitized.secretKey) sanitized.secretKey = "[REDACTED]";
    if (sanitized.password) sanitized.password = "[REDACTED]";
    return sanitized;
  }
}
