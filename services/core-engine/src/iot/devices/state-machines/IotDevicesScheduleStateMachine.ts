export type IotDevicesScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotDevicesScheduleStateMachine {
  private allowedTransitions: Record<IotDevicesScheduleState, IotDevicesScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotDevicesScheduleState, to: IotDevicesScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotDevicesScheduleState, to: IotDevicesScheduleState): IotDevicesScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotDevicesSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
