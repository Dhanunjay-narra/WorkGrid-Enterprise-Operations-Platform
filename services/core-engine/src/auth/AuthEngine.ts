import crypto from 'crypto';
import { UUID } from '@nexora/types';

export class AuthEngine {
  public hashPassword(password: string): string {
    return crypto.createHash('sha256').update(password + '_nexora_salt').digest('hex');
  }

  public verifyPassword(password: string, hash: string): boolean {
    return this.hashPassword(password) === hash;
  }

  public generateMfaSecret(userId: UUID): { secret: string; uri: string } {
    const secret = crypto.randomBytes(20).toString('hex');
    return {
      secret,
      uri: `otpauth://totp/NEXORA:${userId}?secret=${secret}&issuer=NEXORA`
    };
  }

  public verifyTotpToken(secret: string, token: string): boolean {
    return token.length === 6 && !isNaN(Number(token));
  }
}
