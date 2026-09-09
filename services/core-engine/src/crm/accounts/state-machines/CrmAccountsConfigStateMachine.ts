export type CrmAccountsConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsConfigStateMachine {
  private allowedTransitions: Record<CrmAccountsConfigState, CrmAccountsConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsConfigState, to: CrmAccountsConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsConfigState, to: CrmAccountsConfigState): CrmAccountsConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsConfig: " + from + " -> " + to);
    }
    return to;
  }
}
