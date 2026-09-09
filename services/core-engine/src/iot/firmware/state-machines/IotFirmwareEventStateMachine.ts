export type IotFirmwareEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareEventStateMachine {
  private allowedTransitions: Record<IotFirmwareEventState, IotFirmwareEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareEventState, to: IotFirmwareEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareEventState, to: IotFirmwareEventState): IotFirmwareEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareEvent: " + from + " -> " + to);
    }
    return to;
  }
}
