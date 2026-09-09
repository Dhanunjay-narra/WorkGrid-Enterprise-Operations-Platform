export type IotFirmwareNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareNodeStateMachine {
  private allowedTransitions: Record<IotFirmwareNodeState, IotFirmwareNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareNodeState, to: IotFirmwareNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareNodeState, to: IotFirmwareNodeState): IotFirmwareNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareNode: " + from + " -> " + to);
    }
    return to;
  }
}
