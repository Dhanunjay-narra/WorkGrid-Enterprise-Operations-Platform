export type IotFirmwareConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareConfigStateMachine {
  private allowedTransitions: Record<IotFirmwareConfigState, IotFirmwareConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareConfigState, to: IotFirmwareConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareConfigState, to: IotFirmwareConfigState): IotFirmwareConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareConfig: " + from + " -> " + to);
    }
    return to;
  }
}
