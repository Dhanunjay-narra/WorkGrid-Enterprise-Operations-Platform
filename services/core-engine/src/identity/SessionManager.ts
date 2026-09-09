import crypto from 'crypto';
import { AuthSession, UUID } from '@nexora/types';

export interface CreateSessionParams {
  userId: UUID;
  tenantId: UUID;
  ipAddress: string;
  userAgent: string;
  deviceFingerprint: string;
  ttlSeconds?: number;
}

export class SessionManager {
  private activeSessions = new Map<UUID, AuthSession>();
  private userSessionIndex = new Map<UUID, Set<UUID>>();

  public createSession(params: CreateSessionParams): { session: AuthSession; rawToken: string; rawRefreshToken: string } {
    const sessionId = 'sess_' + crypto.randomUUID();
    const rawToken = crypto.randomBytes(32).toString('hex');
    const rawRefreshToken = crypto.randomBytes(48).toString('hex');

    const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex');
    const refreshTokenHash = crypto.createHash('sha256').update(rawRefreshToken).digest('hex');

    const ttl = params.ttlSeconds || 900; // 15 mins
    const expiresAt = new Date(Date.now() + ttl * 1000).toISOString();

    const session: AuthSession = {
      id: sessionId,
      userId: params.userId,
      tenantId: params.tenantId,
      tokenHash,
      refreshTokenHash,
      ipAddress: params.ipAddress,
      userAgent: params.userAgent,
      deviceFingerprint: params.deviceFingerprint,
      expiresAt,
      createdAt: new Date().toISOString(),
    };

    this.activeSessions.set(sessionId, session);

    if (!this.userSessionIndex.has(params.userId)) {
      this.userSessionIndex.set(params.userId, new Set());
    }
    this.userSessionIndex.get(params.userId)!.add(sessionId);

    return { session, rawToken, rawRefreshToken };
  }

  public validateSession(sessionId: UUID, rawToken: string): boolean {
    const session = this.activeSessions.get(sessionId);
    if (!session) return false;

    if (new Date(session.expiresAt).getTime() < Date.now()) {
      this.revokeSession(sessionId);
      return false;
    }

    const computedHash = crypto.createHash('sha256').update(rawToken).digest('hex');
    return computedHash === session.tokenHash;
  }

  public revokeSession(sessionId: UUID): boolean {
    const session = this.activeSessions.get(sessionId);
    if (!session) return false;

    this.activeSessions.delete(sessionId);
    this.userSessionIndex.get(session.userId)?.delete(sessionId);
    return true;
  }

  public revokeAllUserSessions(userId: UUID): number {
    const sessions = this.userSessionIndex.get(userId);
    if (!sessions) return 0;

    let count = 0;
    sessions.forEach(sessId => {
      this.activeSessions.delete(sessId);
      count++;
    });
    this.userSessionIndex.delete(userId);
    return count;
  }
}
