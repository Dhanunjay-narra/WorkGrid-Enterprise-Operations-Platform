export type CrmHealthPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CrmHealthPolicyStateMachine {
  private allowedTransitions: Record<CrmHealthPolicyState, CrmHealthPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CrmHealthPolicyState, to: CrmHealthPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CrmHealthPolicyState, to: CrmHealthPolicyState): CrmHealthPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CrmHealthPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
