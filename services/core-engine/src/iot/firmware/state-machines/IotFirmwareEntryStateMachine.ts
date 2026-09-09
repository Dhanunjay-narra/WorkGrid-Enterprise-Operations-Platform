export type IotFirmwareEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareEntryStateMachine {
  private allowedTransitions: Record<IotFirmwareEntryState, IotFirmwareEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareEntryState, to: IotFirmwareEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareEntryState, to: IotFirmwareEntryState): IotFirmwareEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareEntry: " + from + " -> " + to);
    }
    return to;
  }
}
