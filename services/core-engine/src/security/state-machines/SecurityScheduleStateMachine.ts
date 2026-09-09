export type SecurityScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SecurityScheduleStateMachine {
  private allowedTransitions: Record<SecurityScheduleState, SecurityScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SecurityScheduleState, to: SecurityScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SecurityScheduleState, to: SecurityScheduleState): SecurityScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SecuritySchedule: " + from + " -> " + to);
    }
    return to;
  }
}
