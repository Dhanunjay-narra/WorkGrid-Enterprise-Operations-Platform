export type CrmAccountsScheduleState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsScheduleStateMachine {
  private allowedTransitions: Record<CrmAccountsScheduleState, CrmAccountsScheduleState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsScheduleState, to: CrmAccountsScheduleState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsScheduleState, to: CrmAccountsScheduleState): CrmAccountsScheduleState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsSchedule: " + from + " -> " + to);
    }
    return to;
  }
}
