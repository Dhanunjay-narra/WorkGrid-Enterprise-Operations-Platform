export type ComplianceNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceNodeStateMachine {
  private allowedTransitions: Record<ComplianceNodeState, ComplianceNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceNodeState, to: ComplianceNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceNodeState, to: ComplianceNodeState): ComplianceNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceNode: " + from + " -> " + to);
    }
    return to;
  }
}
