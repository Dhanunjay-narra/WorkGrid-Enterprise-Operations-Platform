export type IotDevicesRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesRecordStateMachine {
  private allowedTransitions: Record<IotDevicesRecordState, IotDevicesRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesRecordState, to: IotDevicesRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesRecordState, to: IotDevicesRecordState): IotDevicesRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesRecord: " + from + " -> " + to);
    }
    return to;
  }
}
