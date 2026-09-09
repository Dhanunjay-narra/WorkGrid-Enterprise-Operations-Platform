export type ComplianceProfileState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceProfileStateMachine {
  private allowedTransitions: Record<ComplianceProfileState, ComplianceProfileState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceProfileState, to: ComplianceProfileState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceProfileState, to: ComplianceProfileState): ComplianceProfileState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceProfile: " + from + " -> " + to);
    }
    return to;
  }
}
