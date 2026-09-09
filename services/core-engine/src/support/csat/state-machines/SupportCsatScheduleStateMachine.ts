export type SupportCsatScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatScheduleStateMachine {
  private allowedTransitions: Record<SupportCsatScheduleState, SupportCsatScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatScheduleState, to: SupportCsatScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatScheduleState, to: SupportCsatScheduleState): SupportCsatScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
