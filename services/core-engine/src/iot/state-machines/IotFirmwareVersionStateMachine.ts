export type IotFirmwareVersionState = "DRAFT" | "PENDING_APPROVAL" | "ACTIVE" | "SUSPENDED" | "ARCHIVED";

export class IotFirmwareVersionStateMachine {
  private validTransitions: Record<IotFirmwareVersionState, IotFirmwareVersionState[]> = {
    DRAFT: ["PENDING_APPROVAL", "ACTIVE", "ARCHIVED"],
    PENDING_APPROVAL: ["ACTIVE", "DRAFT", "ARCHIVED"],
    ACTIVE: ["SUSPENDED", "ARCHIVED"],
    SUSPENDED: ["ACTIVE", "ARCHIVED"],
    ARCHIVED: []
  };

  public canTransition(current: IotFirmwareVersionState, next: IotFirmwareVersionState): boolean {
    return this.validTransitions[current]?.includes(next) ?? false;
  }

  public transition(current: IotFirmwareVersionState, next: IotFirmwareVersionState): IotFirmwareVersionState {
    if (!this.canTransition(current, next)) {
      throw new Error("Illegal state transition for IotFirmwareVersion: from " + current + " to " + next);
    }
    return next;
  }
}
