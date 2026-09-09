export type CrmAccountsStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsStateStateMachine {
  private allowedTransitions: Record<CrmAccountsStateState, CrmAccountsStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsStateState, to: CrmAccountsStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsStateState, to: CrmAccountsStateState): CrmAccountsStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsState: " + from + " -> " + to);
    }
    return to;
  }
}
