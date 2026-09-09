export type ComplianceMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceMappingStateMachine {
  private allowedTransitions: Record<ComplianceMappingState, ComplianceMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceMappingState, to: ComplianceMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceMappingState, to: ComplianceMappingState): ComplianceMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceMapping: " + from + " -> " + to);
    }
    return to;
  }
}
