export type IotFirmwareTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareTaskStateMachine {
  private allowedTransitions: Record<IotFirmwareTaskState, IotFirmwareTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareTaskState, to: IotFirmwareTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareTaskState, to: IotFirmwareTaskState): IotFirmwareTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareTask: " + from + " -> " + to);
    }
    return to;
  }
}
