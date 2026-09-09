import { IoTDevice, UUID } from '@nexora/types';

export class IoTEngine {
  private devices = new Map<UUID, IoTDevice>();

  public registerDevice(tenantId: UUID, deviceId: string, name: string): IoTDevice {
    const dev: IoTDevice = {
      id: 'dev_' + Math.random().toString(36).substring(2, 9),
      tenantId,
      deviceIdentifier: deviceId,
      name,
      status: 'ONLINE'
    };
    this.devices.set(dev.id, dev);
    return dev;
  }

  public ingestTelemetry(deviceId: UUID, metrics: Record<string, number>): boolean {
    return true;
  }
}
