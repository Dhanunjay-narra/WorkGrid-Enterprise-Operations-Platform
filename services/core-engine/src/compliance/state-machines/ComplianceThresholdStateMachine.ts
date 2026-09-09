export type ComplianceThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ComplianceThresholdStateMachine {
  private allowedTransitions: Record<ComplianceThresholdState, ComplianceThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ComplianceThresholdState, to: ComplianceThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ComplianceThresholdState, to: ComplianceThresholdState): ComplianceThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ComplianceThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
