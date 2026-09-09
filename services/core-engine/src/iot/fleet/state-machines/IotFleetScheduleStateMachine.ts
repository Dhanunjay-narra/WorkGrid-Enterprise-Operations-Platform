export type IotFleetScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotFleetScheduleStateMachine {
  private allowedTransitions: Record<IotFleetScheduleState, IotFleetScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotFleetScheduleState, to: IotFleetScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotFleetScheduleState, to: IotFleetScheduleState): IotFleetScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotFleetSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
