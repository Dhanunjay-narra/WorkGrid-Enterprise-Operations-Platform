export type CrmAccountsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsNodeStateMachine {
  private allowedTransitions: Record<CrmAccountsNodeState, CrmAccountsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsNodeState, to: CrmAccountsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsNodeState, to: CrmAccountsNodeState): CrmAccountsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsNode: " + from + " -> " + to);
    }
    return to;
  }
}
