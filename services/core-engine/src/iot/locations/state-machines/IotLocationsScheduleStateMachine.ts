export type IotLocationsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotLocationsScheduleStateMachine {
  private allowedTransitions: Record<IotLocationsScheduleState, IotLocationsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotLocationsScheduleState, to: IotLocationsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotLocationsScheduleState, to: IotLocationsScheduleState): IotLocationsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotLocationsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
