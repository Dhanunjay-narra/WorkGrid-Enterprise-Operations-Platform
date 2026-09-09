export type CrmAccountsQueueState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsQueueStateMachine {
  private allowedTransitions: Record<CrmAccountsQueueState, CrmAccountsQueueState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsQueueState, to: CrmAccountsQueueState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsQueueState, to: CrmAccountsQueueState): CrmAccountsQueueState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsQueue: " + from + " -> " + to);
    }
    return to;
  }
}
