export type IotFirmwareItemState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareItemStateMachine {
  private allowedTransitions: Record<IotFirmwareItemState, IotFirmwareItemState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareItemState, to: IotFirmwareItemState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareItemState, to: IotFirmwareItemState): IotFirmwareItemState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareItem: " + from + " -> " + to);
    }
    return to;
  }
}
