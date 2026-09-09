export type TenancyScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class TenancyScheduleStateMachine {
  private allowedTransitions: Record<TenancyScheduleState, TenancyScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: TenancyScheduleState, to: TenancyScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: TenancyScheduleState, to: TenancyScheduleState): TenancyScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for TenancySchedule: " + from + " -> " + to);
    }
    return to;
  }
}
