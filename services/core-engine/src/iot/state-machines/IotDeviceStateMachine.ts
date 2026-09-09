export type IotDeviceState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotDeviceStateMachine {
  private validTransitions: Record<IotDeviceState, IotDeviceState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotDeviceState, next: IotDeviceState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotDeviceState, next: IotDeviceState): IotDeviceState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotDevice: from " + current + " to " + next);
    }
    return next;
  }
}
