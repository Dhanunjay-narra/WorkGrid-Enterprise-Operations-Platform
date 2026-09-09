export type IotFirmwareScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFirmwareScheduleStateMachine {
  private allowedTransitions: Record<IotFirmwareScheduleState, IotFirmwareScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFirmwareScheduleState, to: IotFirmwareScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFirmwareScheduleState, to: IotFirmwareScheduleState): IotFirmwareScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFirmwareSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
