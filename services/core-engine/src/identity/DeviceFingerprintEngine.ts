import crypto from 'crypto';

export interface DeviceMetadata {
  userAgent: string;
  acceptLanguage: string;
  screenResolution?: string;
  timezoneOffset?: number;
  platform?: string;
}

export class DeviceFingerprintEngine {
  public generateFingerprint(meta: DeviceMetadata): string {
    const raw = [
      meta.userAgent || '',
      meta.acceptLanguage || '',
      meta.screenResolution || '1920x1080',
      (meta.timezoneOffset ?? 0).toString(),
      meta.platform || 'unknown',
    ].join('||');

    return crypto.createHash('sha256').update(raw).digest('hex');
  }

  public isKnownDevice(fingerprint: string, knownFingerprints: string[]): boolean {
    return knownFingerprints.includes(fingerprint);
  }
}
