export type IotFirmwareThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareThresholdStateMachine {
  private allowedTransitions: Record<IotFirmwareThresholdState, IotFirmwareThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareThresholdState, to: IotFirmwareThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareThresholdState, to: IotFirmwareThresholdState): IotFirmwareThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
