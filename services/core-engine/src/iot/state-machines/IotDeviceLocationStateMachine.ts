export type IotDeviceLocationState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotDeviceLocationStateMachine {
  private validTransitions: Record<IotDeviceLocationState, IotDeviceLocationState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotDeviceLocationState, next: IotDeviceLocationState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotDeviceLocationState, next: IotDeviceLocationState): IotDeviceLocationState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotDeviceLocation: from " + current + " to " + next);
    }
    return next;
  }
}
