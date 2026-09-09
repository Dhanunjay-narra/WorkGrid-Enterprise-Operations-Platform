export type IotDeviceCommandState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotDeviceCommandStateMachine {
  private validTransitions: Record<IotDeviceCommandState, IotDeviceCommandState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotDeviceCommandState, next: IotDeviceCommandState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotDeviceCommandState, next: IotDeviceCommandState): IotDeviceCommandState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotDeviceCommand: from " + current + " to " + next);
    }
    return next;
  }
}
