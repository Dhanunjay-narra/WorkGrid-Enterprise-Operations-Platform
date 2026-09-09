export type IotFirmwareStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareStateStateMachine {
  private allowedTransitions: Record<IotFirmwareStateState, IotFirmwareStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareStateState, to: IotFirmwareStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareStateState, to: IotFirmwareStateState): IotFirmwareStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareState: " + from + " -> " + to);
    }
    return to;
  }
}
