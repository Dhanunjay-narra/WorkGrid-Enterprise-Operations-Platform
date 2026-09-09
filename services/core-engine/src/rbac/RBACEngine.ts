import { UserRole } from '@nexora/types';

export interface AccessRequest {
  userRole: UserRole;
  resource: string;
  action: 'create' | 'read' | 'update' | 'delete' | 'execute';
  tenantId: string;
  targetTenantId: string;
}

export class RBACEngine {
  public canAccess(req: AccessRequest): boolean {
    if (req.tenantId !== req.targetTenantId && req.userRole !== UserRole.SUPER_ADMIN) {
      return false;
    }
    if (req.userRole === UserRole.SUPER_ADMIN || req.userRole === UserRole.TENANT_ADMIN) {
      return true;
    }
    if (req.action === 'read') return true;
    return req.userRole !== UserRole.END_USER;
  }
}
