import { Tenant, User, UserRole, UUID } from '@nexora/types';

export class IdentityEngine {
  private tenants = new Map<UUID, Tenant>();
  private users = new Map<UUID, User>();

  public createTenant(name: string, slug: string): Tenant {
    const tenant: Tenant = {
      id: 'tenant_' + Math.random().toString(36).substring(2, 9),
      name,
      slug,
      plan: 'ENTERPRISE',
      status: 'ACTIVE',
      createdAt: new Date().toISOString()
    };
    this.tenants.set(tenant.id, tenant);
    return tenant;
  }

  public registerUser(tenantId: UUID, email: string, firstName: string, lastName: string, role: UserRole): User {
    const user: User = {
      id: 'user_' + Math.random().toString(36).substring(2, 9),
      tenantId,
      email,
      firstName,
      lastName,
      role,
      isActive: true,
      createdAt: new Date().toISOString()
    };
    this.users.set(user.id, user);
    return user;
  }

  public getTenant(id: UUID): Tenant | undefined {
    return this.tenants.get(id);
  }

  public getUser(id: UUID): User | undefined {
    return this.users.get(id);
  }
}
