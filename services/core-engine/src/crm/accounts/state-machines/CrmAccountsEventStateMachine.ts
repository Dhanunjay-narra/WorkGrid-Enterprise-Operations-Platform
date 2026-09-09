export type CrmAccountsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsEventStateMachine {
  private allowedTransitions: Record<CrmAccountsEventState, CrmAccountsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsEventState, to: CrmAccountsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsEventState, to: CrmAccountsEventState): CrmAccountsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
