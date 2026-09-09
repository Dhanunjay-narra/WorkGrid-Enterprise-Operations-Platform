export type IotDeviceGroupState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotDeviceGroupStateMachine {
  private validTransitions: Record<IotDeviceGroupState, IotDeviceGroupState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotDeviceGroupState, next: IotDeviceGroupState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotDeviceGroupState, next: IotDeviceGroupState): IotDeviceGroupState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotDeviceGroup: from " + current + " to " + next);
    }
    return next;
  }
}
