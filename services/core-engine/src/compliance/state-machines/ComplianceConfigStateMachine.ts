export type ComplianceConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceConfigStateMachine {
  private allowedTransitions: Record<ComplianceConfigState, ComplianceConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceConfigState, to: ComplianceConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceConfigState, to: ComplianceConfigState): ComplianceConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceConfig: " + from + " -> " + to);
    }
    return to;
  }
}
