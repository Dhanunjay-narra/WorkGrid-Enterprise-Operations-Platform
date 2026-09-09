export type CrmAccountsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsEntryStateMachine {
  private allowedTransitions: Record<CrmAccountsEntryState, CrmAccountsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsEntryState, to: CrmAccountsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsEntryState, to: CrmAccountsEntryState): CrmAccountsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
