export type IotFirmwareSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareSessionStateMachine {
  private allowedTransitions: Record<IotFirmwareSessionState, IotFirmwareSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareSessionState, to: IotFirmwareSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareSessionState, to: IotFirmwareSessionState): IotFirmwareSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareSession: " + from + " -> " + to);
    }
    return to;
  }
}
