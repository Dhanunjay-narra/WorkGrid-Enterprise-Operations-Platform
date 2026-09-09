export type IotThresholdsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotThresholdsScheduleStateMachine {
  private allowedTransitions: Record<IotThresholdsScheduleState, IotThresholdsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotThresholdsScheduleState, to: IotThresholdsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotThresholdsScheduleState, to: IotThresholdsScheduleState): IotThresholdsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotThresholdsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
