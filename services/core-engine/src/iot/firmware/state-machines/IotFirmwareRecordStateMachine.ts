export type IotFirmwareRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareRecordStateMachine {
  private allowedTransitions: Record<IotFirmwareRecordState, IotFirmwareRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareRecordState, to: IotFirmwareRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareRecordState, to: IotFirmwareRecordState): IotFirmwareRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareRecord: " + from + " -> " + to);
    }
    return to;
  }
}
