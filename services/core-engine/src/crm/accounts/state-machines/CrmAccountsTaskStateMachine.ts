export type CrmAccountsTaskState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsTaskStateMachine {
  private allowedTransitions: Record<CrmAccountsTaskState, CrmAccountsTaskState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsTaskState, to: CrmAccountsTaskState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsTaskState, to: CrmAccountsTaskState): CrmAccountsTaskState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsTask: " + from + " -> " + to);
    }
    return to;
  }
}
