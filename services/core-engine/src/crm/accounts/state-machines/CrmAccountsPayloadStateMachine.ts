export type CrmAccountsPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmAccountsPayloadStateMachine {
  private allowedTransitions: Record<CrmAccountsPayloadState, CrmAccountsPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmAccountsPayloadState, to: CrmAccountsPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmAccountsPayloadState, to: CrmAccountsPayloadState): CrmAccountsPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmAccountsPayload: " + from + " -> " + to);
    }
    return to;
  }
}
