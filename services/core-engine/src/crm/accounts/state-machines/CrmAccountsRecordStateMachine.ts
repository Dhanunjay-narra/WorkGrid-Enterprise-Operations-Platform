export type CrmAccountsRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsRecordStateMachine {
  private allowedTransitions: Record<CrmAccountsRecordState, CrmAccountsRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsRecordState, to: CrmAccountsRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsRecordState, to: CrmAccountsRecordState): CrmAccountsRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsRecord: " + from + " -> " + to);
    }
    return to;
  }
}
