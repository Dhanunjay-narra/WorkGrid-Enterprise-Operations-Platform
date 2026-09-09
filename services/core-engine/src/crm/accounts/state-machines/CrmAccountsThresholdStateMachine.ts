export type CrmAccountsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsThresholdStateMachine {
  private allowedTransitions: Record<CrmAccountsThresholdState, CrmAccountsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsThresholdState, to: CrmAccountsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsThresholdState, to: CrmAccountsThresholdState): CrmAccountsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
