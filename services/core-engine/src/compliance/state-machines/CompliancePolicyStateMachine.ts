export type CompliancePolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class CompliancePolicyStateMachine {
  private allowedTransitions: Record<CompliancePolicyState, CompliancePolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: CompliancePolicyState, to: CompliancePolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: CompliancePolicyState, to: CompliancePolicyState): CompliancePolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for CompliancePolicy: " + from + " -> " + to);
    }
    return to;
  }
}
